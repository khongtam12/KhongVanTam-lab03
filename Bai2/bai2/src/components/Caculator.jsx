import { useState } from 'react'

function Caculator()  {
    const [invest, setInvest] = useState('');
    const [rate, setRate] = useState('');
    const [goal, setGoal] = useState('');
    const [years, setYears] = useState(null);
    const [tableData, setTableData] = useState([]);
  
    const calculateYears = () => {
      if (!invest || !rate || !goal) {
        alert("Nhap thong tin: ");
        return;
      }
  
      const P = parseFloat(invest);
      const r = parseFloat(rate) / 100;
      const G = parseFloat(goal);
  
      if (P <= 0 || r <= 0 || G <= P) {
        alert("Khong hop le");
        return;
      }
  
      let amount = P;
      let year = 0;
      let data = [];
  
      while (amount < G) {
        amount += amount * r; 
        year++;
        data.push({ year, amount: amount.toFixed(2) });
      }
  
      setYears(year);
      setTableData(data);
    };
  
    return (
      <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
        <h2>Tinh so nam dat duoc</h2>
        <input
          type="number"
          placeholder="So tien ban dau"
          value={invest}
          onChange={(e) => setInvest(e.target.value)}
        />
        <input
          type="number"
          placeholder="Lai Suat"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          style={{margin: "20px"}}
        />
        <input
          type="number"
          placeholder="Muc tieu"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={calculateYears} style = {{margin: "20px"}}>Tinh toan</button>
  
        {years !== null && (
          <div>
            <p>Ban can <strong>{years}</strong> nam de dat muc tieu</p>
            <table border="1" style={{ width: "100%", marginTop: "10px" }}>
              <thead>
                <tr>
                  <th>Nam</th>
                  <th>So tien tich duoc</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
export default Caculator
  