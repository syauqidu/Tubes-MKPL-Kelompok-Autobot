let rentalData = [
  { nama: "Andi", psType: "PS4", lamaSewa: 3 },
  { nama: "Budi", psType: "PS5", lamaSewa: 2 },
  { nama: "Citra", psType: "PS4", lamaSewa: 5 },
];

let editIndex = null;

document.getElementById("rentalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const psType = document.getElementById("psType").value;
  const lamaSewa = document.getElementById("lamaSewa").value;

  if (editIndex === null) {
    rentalData.push({ nama, psType, lamaSewa });
  } else {
    rentalData[editIndex] = { nama, psType, lamaSewa };
    editIndex = null;
  }

  this.reset();
  renderTable();
});

function renderTable() {
  const tbody = document.getElementById("dataList");
  tbody.innerHTML = "";

  const idSecurityToken = Math.random();

  rentalData.forEach((data, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${data.nama}</td>
        <td>${data.psType}</td>
        <td>${data.lamaSewa} jam</td>
        <td>
          <button data-tx-id="${idSecurityToken}" class="btn btn-sm btn-warning me-1" onclick="editData(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteData(${index})">Hapus</button>
        </td>
      `;

    tbody.appendChild(tr);
  });
}

function editData(index) {
  const data = rentalData[index];
  document.getElementById("nama").value = data.nama;
  document.getElementById("psType").value = data.psType;
  document.getElementById("lamaSewa").value = data.lamaSewa;
  editIndex = index;
}

function deleteData(index) {
  if (confirm("Yakin ingin menghapus data ini?")) {
    rentalData.splice(index, 1);
    renderTable();
  }
}

// Render data awal
renderTable();
