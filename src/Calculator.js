import React, { useState } from 'react';
function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(num1 / num2);
    setAngle1(Math.atan(num1 / num2) * 180 / Math.PI);
    setAngle2(90 - angle1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <label style={{ color: 'yellow', fontSize: '24px' }}>
          a
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        </label>
        <br />
        <label style={{ color: 'yellow', fontSize: '24px' }}>
          b
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        </label>
        <br />
        <button type="submit" style={{ color: 'black', fontSize: '24px' }}>Вычислить</button>
      </form>
      <p style={{ color: 'yellow', fontSize: '24px' }}>Результат деления: {result}</p>
      <p style={{ color: 'yellow', fontSize: '24px' }}>Угол α: {angle1}</p>
      <p style={{ color: 'yellow', fontSize: '24px' }}>Угол β: {angle2}</p>
    </div>
  );
}

export default Calculator;
