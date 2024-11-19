import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import AddMedicineForm from './AddMedicineForm';
import EditMedicineForm from './EditMedicineForm';

// Khai báo danh sách thuốc
const initialMedicines = [
    {
        id: 1,
        name: 'Paracetamol',
        type: 'Thuốc hoạt động trên hệ thống thần kinh',
        unitPrice: 5000,
        quantityInStock: 50,
        expirationDate: '2025-12-31',
        supplier: 'Nhà thuốc XYZ',
        note: 'Không',
    },
    {
        id: 2,
        name: 'Amoxicillin',
        type: 'Thuốc kháng sinh',
        unitPrice: 10000,
        quantityInStock: 30,
        expirationDate: '2027-06-30',
        supplier: 'Nhà thuốc ABC',
        note: 'Không',
    },
    {
        id: 3,
        name: 'Aspirin',
        type: 'Thuốc chống viêm',
        unitPrice: 7000,
        quantityInStock: 20,
        expirationDate: '2026-08-15',
        supplier: 'Nhà thuốc DEF',
        note: 'Không',
    },
    {
        id: 4,
        name: 'Paracetamol',
        type: 'Thuốc hoạt động trên hệ thống thần kinh',
        unitPrice: 5000,
        quantityInStock: 50,
        expirationDate: '2024-12-31',
        supplier: 'Nhà thuốc XYZ',
        note: 'Không',
    },
    {
        id: 5,
        name: 'Amoxicillin',
        type: 'Thuốc kháng sinh',
        unitPrice: 10000,
        quantityInStock: 30,
        expirationDate: '2028-06-30',
        supplier: 'Nhà thuốc ABC',
        note: 'Không',
    },
    {
        id: 6,
        name: 'Aspirin',
        type: 'Thuốc chống viêm',
        unitPrice: 7000,
        quantityInStock: 20,
        expirationDate: '2025-08-15',
        supplier: 'Nhà thuốc DEF',
        note: 'Không',
    },
    {
        id: 7,
        name: 'Paracetamol',
        type: 'Thuốc hoạt động trên hệ thống thần kinh',
        unitPrice: 5000,
        quantityInStock: 50,
        expirationDate: '2026-12-31',
        supplier: 'Nhà thuốc XYZ',
        note: 'Không',
    },
    {
        id: 8,
        name: 'Amoxicillin',
        type: 'Thuốc kháng sinh',
        unitPrice: 10000,
        quantityInStock: 30,
        expirationDate: '2027-06-30',
        supplier: 'Nhà thuốc ABC',
        note: 'Không',
    },
    {
        id: 9,
        name: 'Aspirin',
        type: 'Thuốc chống viêm',
        unitPrice: 7000,
        quantityInStock: 20,
        expirationDate: '2027-08-15',
        supplier: 'Nhà thuốc DEF',
        note: 'Không',
    },
    // Thêm các thuốc khác vào đây
];

// function MedicineList({ medicines, onEdit, onDelete }) {
const MedicineList = () => {
    const [searchVal, setSearchVal] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [medicines, setMedicines] = useState(initialMedicines);
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [editMode, setEditMode] = useState(false);
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const itemsPerPage = 6;

    const handleChange = (event) => {
        setSearchVal(event.target.value);
    };
    useEffect(() => {
        const results = initialMedicines.filter((medicine) =>
            medicine.name.toLowerCase().includes(searchVal.toLowerCase()),
        );
        setSearchResults(results);
        setMedicines(results); // tự thêm
    }, [searchVal]);

    const handleAddMedicine = (values) => {
        // Generate a new ID for the new medicine
        const newMedicine = {
            // id: values.id,
            name: values.name,
            type: values.type,
            unitPrice: values.unitPrice,
            quantityInStock: values.quantityInStock,
            expirationDate: values['expirationDate'].format('YYYY-MM-DD'),
            supplier: values.supplier,
            note: values.note,
        };
        // Add the new medicine to the list of medicines
        setMedicines([...medicines, newMedicine]);
        // Close the modal
        setVisible(false);
        // {renderMedicineRows}
    };

    // function handleSearchClick() {
    //   if (searchVal === "") {
    //     setMedicines(initialMedicines);
    //     return;
    //   }
    //   const filterBySearch = initialMedicines.filter((medicine) => {
    //     if (medicine.name.toLowerCase().includes(searchVal.toLowerCase())) {
    //       return medicine;
    //     }
    //   });
    //   setMedicines(filterBySearch);
    // }

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        // console.log("handle ok");
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    function handleClick() {
        alert('You clicked me!');
    }

    const handleDelete = (id) => {
        const confirmed = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (confirmed) {
            // Xoá thuốc với id tương ứng khỏi danh sách hiện tại
            const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
            setMedicines(updatedMedicines);

            // Xoá thuốc với id tương ứng khỏi danh sách ban đầu
            // const updatedInitialMedicines = initialMedicines.filter((medicine) => medicine.id !== id);
            // initialMedicines(updatedInitialMedicines);
        }
    };

    const handleEdit = (medicine) => {
        setSelectedMedicine(medicine);
        setEditMode(true);
    };
    // const handleUpdateMedicine = (updatedMedicine) => {
    //   const updatedMedicines = medicines.map((medicine) =>
    //     medicine.id === updatedMedicine.id ? updatedMedicine : medicine
    //   );
    //   setMedicines(updatedMedicines);
    //   setEditMode(false);
    //   setSelectedMedicine(null);
    // };

    const handleCancelEdit = () => {
        setEditMode(false);
        setSelectedMedicine(null);
        handleOk();
        handleCancel();
    };

    const handleSave = (editedMedicine) => {
        // console.log("kayy00");
        const updatedMedicines = medicines.map((medicine) =>
            medicine.id === editedMedicine.id ? editedMedicine : medicine,
        );
        setMedicines(updatedMedicines);
        setVisible(false);
        setEditMode(false); // important update
        handleOk();
        handleCancel();
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = medicines.slice(indexOfFirstItem, indexOfLastItem);

    const renderMedicineRows = currentItems.map((medicine, id) => (
        <tr key={medicine.id}>
            <td>{medicine.name}</td>
            <td>{medicine.type}</td>
            <td>{medicine.unitPrice}</td>
            <td>{medicine.quantityInStock}</td>
            <td>{medicine.expirationDate}</td>
            <td>{medicine.supplier}</td>
            <td>{medicine.note}</td>
            <td>
                <button className="edit-btn" onClick={() => handleEdit(medicine)}>
                    Sửa
                </button>
                {/* <button onClick={handleClick}>Sửa</button> */}
                <button className="delete-btn" onClick={() => handleDelete(medicine.id)}>
                    Xoá
                </button>
            </td>
        </tr>
    ));

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(medicines.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="medicine-header">
                <h1 style={{ paddingRight: 20 }}>Danh sách thuốc</h1>
                <div className="search-bar">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Tìm kiếm thuốc..."
                        value={searchVal}
                        onChange={handleChange}
                        // onChange={e => { setSearchVal(e.target.value); handleSearchClick(); }}
                    />
                </div>
                <Button className="add-button" type="primary" onClick={showModal}>
                    Thêm thuốc
                </Button>
                <Modal title="Thêm Thuốc mới" visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                    <AddMedicineForm onAddMedicine={handleAddMedicine} />
                </Modal>

                {editMode && selectedMedicine && (
                    <Modal
                        title="Chỉnh sửa thông tin Thuốc"
                        open={editMode}
                        onCancel={handleCancelEdit}
                        footer={null}
                        onSave={handleSave}
                    >
                        <EditMedicineForm
                            medicine={selectedMedicine}
                            // onUpdateMedicine={handleUpdateMedicine}
                            onSave={handleSave}
                            onCancel={() => setVisible(false)}
                        />
                    </Modal>
                )}
            </div>

            <table className="medicine-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Loại</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Ngày hết hạn</th>
                        <th>Nhà cung cấp</th>
                        <th>Ghi chú</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>{renderMedicineRows}</tbody>
            </table>

            <div className="page-number" style={{ textAlign: 'center' }}>
                {pageNumbers.map((number) => (
                    <button key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MedicineList;
