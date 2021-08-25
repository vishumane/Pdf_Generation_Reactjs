import UserData from'./Exportpdf/UserData';
import QrCode from'./qrcode/QrCode';
const App=()=> {
  return (
    <div className="App">
    <center> <p>****export your pdf*****</p></center>
      <UserData/>
      <QrCode text="vishal mane"/>
    </div>
  );
}

export default App;
