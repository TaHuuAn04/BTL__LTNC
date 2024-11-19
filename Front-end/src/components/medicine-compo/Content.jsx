import React from 'react';
import MedicineList from './MedicineList'; // Import component danh sách thuốc
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

function Content() {
    // // Khai báo danh sách thuốc
    // const medicines = [
    //     {
    //       id: 1,
    //       name: 'Paracetamol',
    //       type: 'Thuốc hoạt động trên hệ thống thần kinh',
    //       price: 5000,
    //       quantity: 50,
    //       expiryDate: '2025-12-31',
    //       supplier: 'Nhà thuốc XYZ',
    //     },
    //     {
    //       id: 2,
    //       name: 'Amoxicillin',
    //       type: 'Thuốc kháng sinh',
    //       price: 10000,
    //       quantity: 30,
    //       expiryDate: '2027-06-30',
    //       supplier: 'Nhà thuốc ABC',
    //     },
    //     {
    //       id: 3,
    //       name: 'Aspirin',
    //       type: 'Thuốc chống viêm',
    //       price: 7000,
    //       quantity: 20,
    //       expiryDate: '2026-08-15',
    //       supplier: 'Nhà thuốc DEF',
    //     },
    //     {
    //       id: 4,
    //       name: 'Paracetamol',
    //       type: 'Thuốc hoạt động trên hệ thống thần kinh',
    //       price: 5000,
    //       quantity: 50,
    //       expiryDate: '2024-12-31',
    //       supplier: 'Nhà thuốc XYZ',
    //     },
    //     {
    //       id: 5,
    //       name: 'Amoxicillin',
    //       type: 'Thuốc kháng sinh',
    //       price: 10000,
    //       quantity: 30,
    //       expiryDate: '2028-06-30',
    //       supplier: 'Nhà thuốc ABC',
    //     },
    //     {
    //       id: 6,
    //       name: 'Aspirin',
    //       type: 'Thuốc chống viêm',
    //       price: 7000,
    //       quantity: 20,
    //       expiryDate: '2025-08-15',
    //       supplier: 'Nhà thuốc DEF',
    //     },
    //     {
    //       id: 7,
    //       name: 'Paracetamol',
    //       type: 'Thuốc hoạt động trên hệ thống thần kinh',
    //       price: 5000,
    //       quantity: 50,
    //       expiryDate: '2026-12-31',
    //       supplier: 'Nhà thuốc XYZ',
    //     },
    //     {
    //       id: 8,
    //       name: 'Amoxicillin',
    //       type: 'Thuốc kháng sinh',
    //       price: 10000,
    //       quantity: 30,
    //       expiryDate: '2027-06-30',
    //       supplier: 'Nhà thuốc ABC',
    //     },
    //     {
    //       id: 9,
    //       name: 'Aspirin',
    //       type: 'Thuốc chống viêm',
    //       price: 7000,
    //       quantity: 20,
    //       expiryDate: '2027-08-15',
    //       supplier: 'Nhà thuốc DEF',
    //     },
    //     // Thêm các thuốc khác vào đây
    //   ];

    // // Hàm xử lý việc xoá một loại thuốc
    // const handleDelete = (id) => {
    //   // Lọc danh sách thuốc để loại bỏ loại thuốc có id trùng khớp
    //   const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    //   // Cập nhật danh sách thuốc mới
    //   setMedicines(updatedMedicines);
    // };

    // function handleClick() {
    //     alert('You clicked me!');
    // }

    return (
        <main className="medicine-main-container">
            <div>
                <MedicineList />
                {/* <MedicineList medicines={medicines} onDelete={handleDelete} /> */}
            </div>
        </main>
    );
}

export default Content;
