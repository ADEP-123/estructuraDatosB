export default function construirTorres(torres) {
    torres.forEach(torre => {
        const vara = document.createElement("div");
        vara.className = "vara";
        const disco = document.createElement("div");
        disco.className = "disco";
        torre.innerHtml = "";
        torre.appendChild(vara);
        torre.appendChild(disco);
    });
}