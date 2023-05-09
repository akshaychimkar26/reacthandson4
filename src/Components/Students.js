import React from 'react'
import { Link } from 'react-router-dom'
function Students() {
  return (
    <div className='body'>
    <div className='nav'><Link className='navt1' to="/">Home</Link>
      <Link className='navt2' to="/students">Students</Link>
      <Link className='navt3' to="/contact">Contact</Link>
      </div>
      <h1 className='headstudent'>Students Details</h1>
      <div className='add'><p className='addtext'>Add new student</p></div>

        <div className='table'>
            <table className='insidetable'>
                <tr className='tr'>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Course</td>
                    <td>Batch</td>
                    <td>Change</td>
                </tr>
                <tr className='tr'>
                    <td>John</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
                <tr className='tr'>
                    <td>Doe</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
                <tr className='tr'>
                    <td>Biden</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
                <tr className='tr'>
                    <td>Barar</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
                <tr className='tr'>
                    <td>Christ</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
                <tr className='tr'>
                    <td>Elient</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
                <tr className='tr'>
                    <td>Harshita Sharma</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td style={{textDecoration:"Underline"}}>Edit</td>
                </tr>
            </table>
        </div>


    </div>
  )
}

export default Students
