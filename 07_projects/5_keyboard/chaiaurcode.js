const insertID = document.querySelector('#insert')
window.addEventListener('keydown',(e)=>{
    insertID.innerHTML = `
    <div class = 'color'>
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "Spacebar":e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})