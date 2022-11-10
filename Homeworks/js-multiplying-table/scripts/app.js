
function generate_multiplying_table(){
    let table = document.createElement("table");
    document.body.append(table);

    let tr_headr = document.createElement("tr");
    let td_header = document.createElement("td");
    td_header.colSpan = 11;
    td_header.innerText = "Таблица умножения!"
    td_header.classList.add("table-header-first");
    tr_headr.appendChild(td_header);
    table.appendChild(tr_headr);

    for (let i = 0; i < 11; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
  
        for (let j = 0; j < 11; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);

            if (i == 0 && j == 0){
                 td.classList.add("diagonal-empty");
            }
            
            if( i == 0) {
                td.innerText = j; 
                td.classList.add("header")
            }
          
            if(i>0) td.innerText = i * j;


            if(j == 0){
                td.innerText = i;
                td.classList.add("header");
            } 
        }
    }
}

generate_multiplying_table();