// قائمة المنتجات مقسمة إلى أقسام
const menu = {
    "مشروبات ساخنة": {
      "قهوة": 20,
      "شاي": 15,
      "كابتشينو": 30
    },
    "مشروبات باردة": {
      "عصير برتقال": 25,
      "عصير ليمون": 20,
      "موهيتو": 35
    },
    "ماكولات": {
      "ساندويتش": 40,
      "برجر": 50,
      "بيتزا": 60
    },
    "حلويات": {
      "كعك": 15,
      "آيس كريم": 20,
      "مربى": 25
    }
  };
  
  // دالة لعرض القائمة مع الأقسام
  function displayMenu() {
    for (const section in menu) {
      console.log(`\n${section}:`);
      for (const item in menu[section]) {
        console.log(`  - ${item}: ${menu[section][item]} جنيه`);
      }
    }
  }
  
  // دالة لحساب إجمالي الطلب
  function calculateOrder(order) {
    let total = 0;
    order.forEach(item => {
      let found = false;
      for (const section in menu) {
        if (menu[section][item] !== undefined) {
          total += menu[section][item];
          found = true;
          break;
        }
      }
      if (!found) {
        console.log(`"${item}" غير موجود في القائمة.`);
      }
    });
    return total;
  }
  
  // اختبار الكود
  displayMenu();
  
  const userOrder = ["قهوة", "عصير برتقال", "ساندويتش", "آيس كريم"];
  console.log("\nطلبك:");
  console.log(userOrder.join(", "));
  
  const totalPrice = calculateOrder(userOrder);
  console.log(`\nالإجمالي: ${totalPrice} جنيه`);
  