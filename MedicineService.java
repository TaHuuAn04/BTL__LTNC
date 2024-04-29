import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MedicineService {
    private List<Medicine> medicineList;

    public MedicineService() {
        this.medicineList = new ArrayList<>();
    }

    // Thêm một đối tượng Medicine mới vào danh sách
    public void addMedicine(Medicine medicine) {
        medicineList.add(medicine);
    }

    // Xóa một đối tượng Medicine từ danh sách dựa trên tên sản phẩm
    public boolean removeMedicine(String name) {
        for (Medicine medicine : medicineList) {
            if (medicine.getName().equals(name)) {
                medicineList.remove(medicine);
                return true; // Trả về true nếu xóa thành công
            }
        }
        return false; // Trả về false nếu không tìm thấy đối tượng cần xóa
    }

    // Thiết lập số lượng tồn kho của một đối tượng Medicine dựa trên tên sản phẩm
    public boolean setQuantityInStock(String name, int quantity) {
        for (Medicine medicine : medicineList) {
            if (medicine.getName().equals(name)) {
                medicine.setQuantityInStock(quantity);
                return true; // Trả về true nếu thiết lập thành công
            }
        }
        return false; // Trả về false nếu không tìm thấy đối tượng cần thiết lập
    }

    // Các phương thức khác có thể được thêm vào tùy thuộc vào yêu cầu
}
