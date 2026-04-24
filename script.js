// 根據提供資料建立的車站資料庫 [cite: 7, 28, 40, 48, 53, 111]
const stations = [
    { name: "弘大入口", line: "2號線, 機場鐵路", spot: "弘大商圈、小豬存錢罐烤肉 [cite: 115, 116]" },
    { name: "景福宮", line: "3號線", spot: "景福宮、國立古宮博物館 [cite: 43]" },
    { name: "安國", line: "3號線", spot: "北村韓屋村、三清洞 [cite: 44]" },
    { name: "聖水", line: "2號線", spot: "聖水洞咖啡街、大林倉庫 [cite: 120]" },
    { name: "乙支路3街", line: "2號線, 3號線", spot: "清溪川 [cite: 17]" },
    { name: "鐘路3街", line: "1, 3, 5號線", spot: "益善洞韓屋街 [cite: 54]" },
    { name: "明洞", line: "4號線", spot: "明洞聖堂、南山首爾塔 [cite: 50]" },
    { name: "金浦機場", line: "5, 9號線, 機場鐵路", spot: "樂天購物城 [cite: 112]" }
];

function searchStation() {
    const input = document.getElementById('searchInput').value;
    const resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = '';

    const results = stations.filter(s => s.name.includes(input));

    if (results.length > 0) {
        results.forEach(s => {
            const div = document.createElement('div');
            div.className = 'station-card';
            div.innerHTML = `
                <h3>${s.name}</h3>
                <p><strong>所屬路線：</strong>${s.line}</p>
                <p><strong>周邊景點：</strong>${s.spot}</p>
            `;
            resultArea.appendChild(div);
        });
    } else {
        resultArea.innerHTML = '<p>查無此車站，請試試其他關鍵字。</p>';
    }
}