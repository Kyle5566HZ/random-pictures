xport default async function handler(req, res) {
    // 隨機圖片列表（可以改成讀取你的 .txt 檔案）
    const images = [
        "https://imgpoi.com/i/WYVD8D.md.png",
        "https://imgpoi.com/i/X3DUC9.png",
        "https://imgpoi.com/i/X3DPP5.md.png"
    ];

    // 隨機選擇一張圖片
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // 轉發圖片（讓網址本身就顯示圖片）
    res.writeHead(302, { Location: randomImage });
    res.end();
}
