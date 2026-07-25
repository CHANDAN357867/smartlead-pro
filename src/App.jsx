import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Leads from './pages/Leads'
import AnalyticsChart from './components/AnalyticsChart'
import './App.css'


function App() {

  const [page, setPage] = useState("dashboard")


  return (
    <div>

      <Navbar />


      <div className="layout">

        <Sidebar />


        <main className="content">


          <div className="menu-buttons">

            <button onClick={() => setPage("dashboard")}>
              Dashboard
            </button>

            <button onClick={() => setPage("leads")}>
              Leads
            </button>

          </div>



          {
            page === "dashboard" && (

              <>

                <h1>SmartLead Pro Dashboard 🚀</h1>

                <p>
                  Track your leads, customers and business performance.
                </p>


                <div className="cards">


                  <div className="card">
                    <h3>Total Leads</h3>
                    <h2>250</h2>
                  </div>


                  <div className="card">
                    <h3>New Leads</h3>
                    <h2>80</h2>
                  </div>


                  <div className="card">
                    <h3>Converted</h3>
                    <h2>120</h2>
                  </div>


                  <div className="card">
                    <h3>Revenue</h3>
                    <h2>£50,000</h2>
                  </div>


                </div>


                <AnalyticsChart />


              </>

            )
          }



          {
            page === "leads" && (

              <Leads />

            )
          }



        </main>


      </div>


    </div>
  )
}


export default App