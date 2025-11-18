// utils/usdcConverter.ts

// USDC uses 6 decimals (10^6)
const USDC_DECIMALS: number = 1_000_000;

/**
 * Converts a human-readable USDC amount (string or number) to its smallest integer units (base unit).
 * * Example: "2.5" -> "2500000"
 * * @param usdcAmount The human-readable USDC amount (e.g., 2.5).
 * @returns The amount in its smallest integer units as a string.
 * @throws {Error} If the amount is invalid, non-numeric, or negative.
 */
export default function toUsdcUnits(usdcAmount: string | number): string {
    
    // 1. Attempt to convert the input to a floating-point number
    const usdcValue = parseFloat(String(usdcAmount));

    // 2. Error handling for non-numeric or NaN values
    if (isNaN(usdcValue)) {
        throw new Error(`Invalid USDC amount: ${usdcAmount}. Must be a valid number.`);
    }

    // 3. Error handling for negative values
    if (usdcValue < 0) {
        throw new Error("USDC amount cannot be negative.");
    }

    // 4. Perform the conversion to base units
    // The multiplication might result in a float (e.g., 2.5 * 10^6 = 2500000.0)
    const baseUnitsFloat: number = usdcValue * USDC_DECIMALS;
    
    // 5. Truncate/Convert to integer (equivalent to Python's int() cast on the result)
    // We use Math.round() or Math.trunc() here to handle potential floating-point inaccuracies, 
    // ensuring it behaves like Python's int cast after multiplication.
    const intUsdc: number = Math.round(baseUnitsFloat); 
    
    // 6. Return the result as a string (matching the Python function's final return type)
    return String(intUsdc);
}

// --- Example Usage ---
/*
try {
    const units1 = toUsdcUnits("1.0");  // "1000000"
    const units2 = toUsdcUnits(2.5);    // "2500000"
    const units3 = toUsdcUnits(0.000001); // "1"
    
    console.log(`1.0 USDC in units: ${units1}`);
    console.log(`2.5 USDC in units: ${units2}`);
    console.log(`0.000001 USDC in units: ${units3}`);

    // This will throw an error:
    // toUsdcUnits("-5"); 
    // toUsdcUnits("not a number"); 

} catch (e) {
    if (e instanceof Error) {
        console.error("Conversion Error:", e.message);
    }
}
*/