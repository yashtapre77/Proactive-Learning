import React, { useState } from "react";
import "./StudentForm.css";

const StudentForm = ({ student }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({ ...student });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="student-form">
      <h2>Student Information</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sex">Gender:</label>
          <input
            type="text"
            id="sex"
            value={formData.sex}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="famsize">Family Size:</label>
          <input
            type="text"
            id="famsize"
            value={formData.famsize}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Pstatus">Parental Status:</label>
          <input
            type="text"
            id="Pstatus"
            value={formData.Pstatus}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Medu">Mother's Education:</label>
          <input
            type="text"
            id="Medu"
            value={formData.Medu}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Fedu">Father's Education:</label>
          <input
            type="text"
            id="Fedu"
            value={formData.Fedu}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Mjob">Mother's Job:</label>
          <input
            type="text"
            id="Mjob"
            value={formData.Mjob}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Fjob">Father's Job:</label>
          <input
            type="text"
            id="Fjob"
            value={formData.Fjob}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Grade_8_Marks">Grade 8 Marks:</label>
          <input
            type="text"
            id="Grade_8_Marks"
            value={formData.Grade_8_Marks}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Grade_9_Marks">Grade 9 Marks:</label>
          <input
            type="text"
            id="Grade_9_Marks"
            value={formData.Grade_9_Marks}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Grade_10_Marks">Grade 10 Marks:</label>
          <input
            type="text"
            id="Grade_10_Marks"
            value={formData.Grade_10_Marks}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Grade_11_Marks">Grade 11 Marks:</label>
          <input
            type="text"
            id="Grade_11_Marks"
            value={formData.Grade_11_Marks}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Grade_12_Marks">Grade 12 Marks:</label>
          <input
            type="text"
            id="Grade_12_Marks"
            value={formData.Grade_12_Marks}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            value={formData.course}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester:</label>
          <input
            type="text"
            id="semester"
            value={formData.semester}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>

        <div className="buttons">
          <button type="button" onClick={handleEditToggle}>
            {isEditable ? "Save" : "Edit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;