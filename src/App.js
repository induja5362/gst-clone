import React from 'react';
import './App.css'; // Custom CSS for additional styling

const GstTable = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <h3 className="text-center mb-4">
        3.1 Details of Outward Supplies and Inward Supplies Liable to Reverse Charge
      </h3>

      {/* Table Section */}
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nature of Supplies</th>
            <th scope="col">Total Taxable Value (₹)</th>
            <th scope="col">Integrated Tax (₹)</th>
            <th scope="col">Central Tax (₹)</th>
            <th scope="col">State/UT Tax (₹)</th>
            <th scope="col">Cess (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              (a) Outward taxable supplies (other than zero rated, nil rated and exempted)
            </td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>(b) Outward taxable supplies (zero rated)</td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>(c) Other outward supplies (Nil rated, exempted)</td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>(d) Inward supplies (liable to reverse charge)</td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>(e) Non-GST outward supplies</td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
            <td><input type="text" className="form-control" /></td>
          </tr>
        </tbody>
      </table>

      {/* Buttons Section */}
      <div className="text-center">
        <button className="btn btn-secondary mr-3">Cancel</button>
        <button className="btn btn-primary">Confirm</button>
      </div>
    </div>
  );
};

export default GstTable;
