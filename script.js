let cars = ["Honda", "Toyota", "KIA", "Suzuki"]
document.write("<h1>Simply Showing Data</h1>")
document.write("<h2>" + cars + "</h2>")
for (i = 0; i < 4; i++) {
    document.write("<li>" + cars[i] + "</li>")
}