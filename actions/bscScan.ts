"use server";

export const getBNBBalance = async (account: string) => {
  try {
    const result = await fetch(
      `https://api.bscscan.com/api?module=account&action=balance&address=${account}&apiKey=${process.env.BSC_SCAN_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    return result;
  } catch (error) {
    console.error("Ошибка получения баланса в сети BNB: ", error);
    return { error: "Ошибка получения баланса в сети BNB" };
  }
};
