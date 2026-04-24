// 1. 切換分頁邏輯
function showTab(tabId, btnElement) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
}

// 2. 車站資料庫 (之後增加車站只需改這裡)
const stationData = [
    { name: "弘大入口", line: "2號線, A'REX", spot: "弘大商圈、風川鰻魚", transfer: "轉乘機場快線請往地下 4 層" },
    { name: "安國", line: "3號線", spot: "北村韓屋村、倫敦貝果", transfer: "無需轉乘" },
    { name: "鐘路3街", line: "1, 3, 5號線", spot: "益善洞", transfer: "建議經由3號線中轉" },
    { name: "景福宮", line: "3號線", spot: "西巡邏街、景福宮夜間參觀", transfer: "無需轉乘" },
    { name: "聖水", line: "2號線", spot: "聖水一隻雞、首爾林", transfer: "無需轉乘" }
];

// 3. 初始化選單：當網頁讀取完畢後自動執行
window.onload = function() {
    const singleSelect = document.getElementById('stationSelect');
    const startSelect = document.getElementById('startSelect');
    const endSelect = document.getElementById('endSelect');

    stationData.forEach(station => {
        // 單站查詢選單
        singleSelect.options.add(new Option(station.name, station.name));
        // 路線規劃選單
        startSelect.options.add(new Option(station.name, station.name));
        endSelect.options.add(new Option(station.name, station.name));
    });
};

// 4. 下拉選單查詢車站
function findStation() {
    const selectedName = document.getElementById('stationSelect').value;
    const res = document.getElementById('singleResult');
    if (!selectedName) return;

    const data = stationData.find(s => s.name === selectedName);
    res.innerHTML = `
        <div class="result-card">
            <h3 style="margin:0; color:#00923f;">${data.name}</h3>
            <p><b>🚇 路線：</b>${data.line}</p>
            <p><b>📍 景點：</b>${data.spot}</p>
            <p><b>ℹ️ 提示：</b>${data.transfer}</p>
        </div>`;
}

// 5. 下拉選單規劃路線
function findRoute() {
    const start = document.getElementById('startSelect').value;
    const end = document.getElementById('endSelect').value;
    const res = document.getElementById('routeResult');
    
    if (!start || !end) return;
    if (start === end) {
        res.innerHTML = `<div class="result-card">起點與終點相同喔！</div>`;
        return;
    }

    let advice = `搭乘地鐵從 ${start} 前往 ${end}。請查看站內看板確認方向。`;
    
    // 轉乘邏輯 (2號線轉3號線)
    const line2Stations = ["弘大入口", "聖水"];
    const line3Stations = ["安國", "景福宮"];

    if (line2Stations.includes(start) && line3Stations.includes(end)) {
        advice = `<b>💡 轉乘建議：</b><br>搭乘 2 號線至 <b>乙支路3街站</b>，轉乘 3 號線前往 ${end}。`;
    }

    res.innerHTML = `<div class="result-card">${advice}</div>`;
}
