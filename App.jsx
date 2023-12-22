import './App.css';
import './components/Pdf/Pdf.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Nav/Nav';
import Accueil from './components/Accueil/Accueil';

import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Slider from './components/Sliders/Slider';
import Sport from './components/Pages/Sport';
import Home from './components/Pages/Home';
import Cinema from './components/Pages/Cinema';
import Spectacle from './components/Pages/Spectacle';
import Payment from './components/Payment/Payment';
import PdfMatch from './components/Pdf/PdfMatch';
import PaymentC from './components/Payment/PaymentC';
import PdfCinema from './components/Pdf/PdfCinema';

import PaymentS from './components/Payment/PaymentS';
import PdfS from './components/Pdf/PdfS';
import data from '../src/components/Data/match.json'
import data2 from '../src/components/Data/Cinema.json'
import data3 from '../src/components/Data/spectacle.json'


function App() {
  return (<>

    <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sport' element={<Sport/>}></Route>
          <Route path='/cinema' element={<Cinema/>}></Route>
          <Route path='/spectacle' element={<Spectacle/>}></Route>
          <Route path='/achat/:titre' element={<Payment data={data}/>}></Route>
          <Route path='/pdfsport/:titre' element={<PdfMatch data={data} />}></Route>
          <Route path='/achatcn/:titre' element={<PaymentC data2={data2} />}></Route>
          <Route path='/pdfcinema/:titre' element={<PdfCinema data2={data2} />}></Route>
          <Route path='/achatTH/:titre' element={<PaymentS data3={data3} />}></Route>
          <Route path='/pdfTH/:titre' element={<PdfS data3={data3} /> }></Route>
          
          
        </Routes>
        
    </BrowserRouter>

    <Footer />
 

    
      
      </>
    
    
  );
}

export default App;
