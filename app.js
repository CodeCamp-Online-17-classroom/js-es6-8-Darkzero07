// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม
function removeRandom(array) {
  const indexOfRmoveArray = Math.round(Math.random() * array.length);
//   console.log(indexOfRmoveArray);
  return array.filter((arr, index) => index !== indexOfRmoveArray);
}
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = removeRandom(originalArray);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(modifiedArray); // [1, 2, 4, 5]
