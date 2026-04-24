// 車站資料庫：未來要增加車站只要改這裡
const stationData = [
    { name: "弘大入口", line: "2號線, A'REX", spot: "弘大商圈", transfer: "轉乘機場快線請往地下 4 層" },
    { name: "安國", line: "3號線", spot: "北村韓屋村", transfer: "無需轉乘" },
    { name: "鐘路3街", line: "1, 3, 5號線", spot: "益善洞", transfer: "1號與5號轉乘較長，建議經3號線" },
    { name: "景福宮", line: "3號線", spot: "景福宮夜間開放", transfer: "無需轉乘" },
    { name: "聖水", line: "2號線", spot: "聖水咖啡街", transfer: "無需轉乘" }
];

// 切換頁籤邏輯
function showTab(tabId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 單站查詢邏輯
function findStation() {
    const input = document.getElementById('stationInput').value.trim();
    const res = document.getElementById('singleResult');
    if (!input) return;

    const data = stationData.find(s => s.name.includes(input));
    res.innerHTML = data ? 
        `<div class="result-card"><h3>${data.name}</h3><p><b>路線：</b>${data.line}</p><p><b>熱點：</b>${data.spot}</p><p><b>提示：</b>${data.transfer}</p></div>` 
        : `<div class="result-card">找不到「${input}」站，請檢查名稱。</div>`;
}

// 簡單路線規劃邏輯
function findRoute() {
    const start = document.getElementById('startStation').value.trim();
    const end = document.getElementById('endStation').value.trim();
    const res = document.getElementById('routeResult');
    
    if (!start || !end) return;

    // 這裡可以根據行程加入特定的轉乘提醒
    let advice = `建議從 ${start} 出發，確認站內標示前往目標線路。`;
    if ((start === "弘大入口" || start === "聖水") && (end === "安國" || end === "景福宮")) {
        advice = `<b>轉乘建議：</b><br>搭乘 2 號線至 <b>乙支路3街</b>，轉乘 3 號線即可抵達。`;
    }

    res.innerHTML = `<div class="result-card">${advice}</div>`;
}
