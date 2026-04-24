// 1. 切換分頁邏輯
function showTab(tabId, btnElement) {
    // 隱藏所有區塊
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    // 取消所有按鈕選取狀態
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // 顯示指定區塊與啟動按鈕
    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
}

// 2. 車站資料庫
const stationData = [
    { name: "弘大入口", line: "2號線, A'REX", spot: "弘大商圈、風川鰻魚", transfer: "轉乘機場快線請往地下 4 層" },
    { name: "安國", line: "3號線", spot: "北村韓屋村、倫敦貝果", transfer: "無需轉乘" },
    { name: "鐘路3街", line: "1, 3, 5號線", spot: "益善洞", transfer: "建議經由3號線中轉" },
    { name: "景福宮", line: "3號線", spot: "西巡邏街、景福宮夜間參觀", transfer: "無需轉乘" },
    { name: "聖水", line: "2號線", spot: "聖水一隻雞、首爾林", transfer: "無需轉乘" }
];

// 3. 搜尋車站
function findStation() {
    const input = document.getElementById('stationInput').value.trim();
    const res = document.getElementById('singleResult');
    if (!input) return;

    const data = stationData.find(s => s.name.includes(input));
    if (data) {
        res.innerHTML = `
            <div class="result-card">
                <h3 style="margin:0; color:#00923f;">${data.name}</h3>
                <p><b>🚇 路線：</b>${data.line}</p>
                <p><b>📍 景點：</b>${data.spot}</p>
                <p><b>ℹ️ 提示：</b>${data.transfer}</p>
            </div>`;
    } else {
        res.innerHTML = `<div class="result-card">查無「${input}」站資訊，請輸入正確站名。</div>`;
    }
}

// 4. 路線規劃
function findRoute() {
    const start = document.getElementById('startStation').value.trim();
    const end = document.getElementById('endStation').value.trim();
    const res = document.getElementById('routeResult');
    if (!start || !end) return;

    let advice = `搭乘地鐵從 ${start} 前往 ${end}。請查看站內看板確認方向。`;
    
    // 模擬手冊中的常用邏輯
    if ((start.includes("弘大") || start.includes("聖水")) && (end.includes("安國") || end.includes("景福宮"))) {
        advice = `<b>💡 轉乘建議：</b><br>搭乘 2 號線至 <b>乙支路3街站</b>，轉乘 3 號線前往 ${end}。`;
    }

    res.innerHTML = `<div class="result-card">${advice}</div>`;
}
