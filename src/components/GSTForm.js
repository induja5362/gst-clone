import React from 'react';
import './App.css'; // Custom CSS for styling

const GSTForm = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <h3 className="text-center mb-4 section-header">
        3.1 Details of Outward Supplies and Inward Supplies Liable to Reverse Charge
      </h3>

      {/* Info Note */}
      <div className="alert alert-info text-left small">
        <input type="checkbox" className="mr-2" /> 
        Table 3.1(a), (b), (c), and (e) are auto-drafted based on values provided in GSTR-1.
        Whereas Table 3.1(d) is auto-drafted based on GSTR-2B.
      </div>

      {/* Table Section */}
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nature of Supplies</th>
            <th>Total Taxable Value (₹)</th>
            <th>Integrated Tax (₹)</th>
            <th>Central Tax (₹)</th>
            <th>State/UT Tax (₹)</th>
            <th>Cess (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(a) Outward taxable supplies (other than zero rated, nil rated and exempted)</td>
            <td><input type="text" className="form-control" defaultValue="110000.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="9900.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
          </tr>
          <tr>
            <td>(b) Outward taxable supplies (zero rated)</td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
          </tr>
          <tr>
            <td>(c) Other outward supplies (Nil rated, exempted)</td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
          </tr>
          <tr>
            <td>(d) Inward supplies (liable to reverse charge)</td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
          </tr>
          <tr>
            <td>(e) Non-GST outward supplies</td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
            <td><input type="text" className="form-control" defaultValue="0.00" /></td>
          </tr>
        </tbody>
      </table>

      {/* Buttons Section */}
      <div className="text-center mt-4">
        <button className="btn btn-secondary mr-3">Cancel</button>
        <button className="btn btn-primary">Confirm</button>
      </div>
    </div>
  );
};

export default GSTForm;
