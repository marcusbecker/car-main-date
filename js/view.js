class ServiceHtmlView {
    constructor(services) {
        this.services = services;
        this.converter = new ConverterUtil();
    }

    serviceToHTML(currentKm, currentDate) {
        let content = "";

        this.services.forEach(serv => {
            const endKm = serv.getValidateKm(currentKm);
            const endDate = serv.getValidateDate(currentDate);

            const kmState = serv.kmToState(currentKm, endKm);
            const dateState = serv.dateToState(currentDate, endDate);
            const state = Math.max(kmState, dateState);

            let stateClass = "circle";
            if (state == 3) {
                stateClass += " circle_warning";
            } else if (state == 2) {
                stateClass += " circle_information";
            }

            content += `<div class="service-detail"><div class="${stateClass}"></div><h2>${serv.service.name}</h2>`;
            content += `<p><strong>Change info</strong><br><b>Months:</b> ${serv.service.months} <b>Km:</b> ${this.converter.frmKm(serv.service.km * 1000, "pt-BR")}</p>`;
            content += `<p><strong>Last Change info</strong>:<br><b>Date:</b> ${this.converter.frmDate(serv.service.lastDate, "pt-BR")} <b>Km:</b> ${this.converter.frmKm(serv.service.lastKm, "pt-BR")}</p>`;

            content += `<p><strong>Next Change info:</strong>`;
            if (endDate) {
                content += `<br><span><strong>Date to next change</strong> ${this.converter.frmDate(endDate, "pt-BR")}</span>`;
            }

            if (endKm > 0) {
                content += `<br><span><strong>Km to next change</strong> ${this.converter.frmKm(endKm, "pt-BR")}</span>`;
            }

            content += `</p></div>`;
        });

        return content;
    }
}