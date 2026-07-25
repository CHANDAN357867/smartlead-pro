import { useState } from 'react'

function Leads() {

  const [showForm, setShowForm] = useState(false)

  const [search, setSearch] = useState("")


  const [leads, setLeads] = useState([
    {
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      company: "Tech Solutions",
      status: "New"
    },
    {
      name: "Priya Sharma",
      email: "priya@gmail.com",
      company: "Digital World",
      status: "Converted"
    }
  ])


  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    company: "",
    status: "New"
  })


  const addLead = () => {

    if (
      newLead.name === "" ||
      newLead.email === "" ||
      newLead.company === ""
    ) {
      alert("Please fill all details")
      return
    }


    setLeads([...leads, newLead])


    setNewLead({
      name: "",
      email: "",
      company: "",
      status: "New"
    })


    setShowForm(false)
  }



  return (

    <div>

      <h1>Lead Management</h1>


      {/* Search */}
      <input
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <br /><br />


      {/* Add Lead Button */}
      <button onClick={() => setShowForm(!showForm)}>
        + Add New Lead
      </button>



      {/* Lead Form */}
      {showForm && (

        <div className="lead-form">

          <input
            placeholder="Name"
            value={newLead.name}
            onChange={(e) =>
              setNewLead({
                ...newLead,
                name: e.target.value
              })
            }
          />


          <input
            placeholder="Email"
            value={newLead.email}
            onChange={(e) =>
              setNewLead({
                ...newLead,
                email: e.target.value
              })
            }
          />


          <input
            placeholder="Company"
            value={newLead.company}
            onChange={(e) =>
              setNewLead({
                ...newLead,
                company: e.target.value
              })
            }
          />


          {/* Status Dropdown */}
          <select
            value={newLead.status}
            onChange={(e) =>
              setNewLead({
                ...newLead,
                status: e.target.value
              })
            }
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Interested">Interested</option>
            <option value="Converted">Converted</option>
            <option value="Lost">Lost</option>
          </select>


          <button onClick={addLead}>
            Save Lead
          </button>


        </div>

      )}



      {/* Leads Table */}
      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
          </tr>

        </thead>


        <tbody>

          {
            leads
              .filter((lead) =>
                lead.name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||

                lead.company
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((lead, index) => (

                <tr key={index}>

                  <td>{lead.name}</td>

                  <td>{lead.email}</td>

                  <td>{lead.company}</td>

                  <td>
  <span className={`status ${lead.status.toLowerCase()}`}>
    {lead.status}
  </span>
</td>

                </tr>

              ))
          }

        </tbody>


      </table>


    </div>

  )
}


export default Leads