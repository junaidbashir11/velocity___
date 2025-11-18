import { NextRequest, NextResponse } from 'next/server';
import { X402PaymentHandler } from 'x402-solana/server';


export async function POST(req) {

  


  const x402 = new X402PaymentHandler({
    network: 'solana',
    treasuryAddress: "HuzmfCNYeZgnHkcSG3hfsusy9FNKT1THBi3JU7QuMyjq",
    facilitatorUrl: 'https://facilitator.payai.network',
});

  // 1. Extract payment header
  const paymentHeader = x402.extractPayment(req.headers);
  
  // 2. Create payment requirements using x402 RouteConfig format
  const paymentRequirements = await x402.createPaymentRequirements({
    price: {
      amount: "2500000",  // $2.50 USDC (in micro-units, as string)
      asset: {
        address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
      }
    },
    network: 'solana',
    config: {
      description: 'AI Chat Request',
      resource: `http://localhost:3000/api/tester`,
    }
  });
  
  if (!paymentHeader) {
    // Return 402 with payment requirements
    const response = x402.create402Response(paymentRequirements);
    return NextResponse.json(response.body, { status: response.status });
  }

  // 3. Verify payment
  const verified = await x402.verifyPayment(paymentHeader, paymentRequirements);
  if (!verified) {
    return NextResponse.json({ error: 'Invalid payment' }, { status: 402 });
  }

  // 4. Process your business logic
  const result = JSON.stringify({"message":"WORKS"})

  // 5. Settle payment
  await x402.settlePayment(paymentHeader, paymentRequirements);

  // 6. Return response
  return NextResponse.json(result);
}