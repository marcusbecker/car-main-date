class DataService {

    get data() {
        const services = [];
        //services.push({name: "", months: 0, km: 0, lastDate: new Date(), lastKm: 0 });
        services.push(new Service({ name: "Óleo motor + filtro", months: 12, km: 10, lastDate: new Date("2024/11/01"), lastKm: 97381 }));
        services.push(new Service({ name: "Correia dentada", months: 0, km: 260, lastDate: null, lastKm: 0 }));
        services.push(new Service({ name: "Filtro de ar", months: 0, km: 40, lastDate: new Date("2024/11/01"), lastKm: 97381 }));
        services.push(new Service({ name: "Velas", months: 0, km: 40, lastDate: new Date("2020/07/01"), lastKm: 70600 }));
        services.push(new Service({ name: "Filtro Combustível", months: 24, km: 20, lastDate: new Date("2024/11/01"), lastKm: 97381 }));
        services.push(new Service({ name: "Liq. arrefecimento (substituição)", months: 72, km: 160, lastDate: new Date("2018/04/01"), lastKm: 0 }));
        services.push(new Service({ name: "Tampa reservatório expansão", months: 36, km: 0, lastDate: new Date("2018/04/01"), lastKm: 0 }));
        services.push(new Service({ name: "Verificar transmissão", months: 6, km: 0, lastDate: new Date("2018/04/01"), lastKm: 0 }));
        services.push(new Service({ name: "Fluído embreagem", months: 12, km: 10, lastDate: new Date("2020/07/01"), lastKm: 69629 }));
        services.push(new Service({ name: "Fluído transmissão manual", months: 0, km: 260, lastDate: new Date("2018/04/01"), lastKm: 0 }));
        services.push(new Service({ name: "Suspensão verificar", months: 24, km: 20, lastDate: new Date("2020/07/01"), lastKm: 69629 }));
        services.push(new Service({ name: "Amortecedores dianteiros", months: 36, km: 30, lastDate: new Date("2018/04/01"), lastKm: 0 }));
        services.push(new Service({ name: "Amortecedores traseiros", months: 36, km: 30, lastDate: new Date("2023/02/01"), lastKm: 86767 }));
        services.push(new Service({ name: "Fluído do freio substituir", months: 24, km: 0, lastDate: new Date("2023/09/01"), lastKm: 0 }));
        services.push(new Service({ name: "Fluído do freio verificar tubulações e mangueiras flexíveis", months: 36, km: 30, lastDate: new Date("2020/07/01"), lastKm: 69629 }));
        services.push(new Service({ name: "Pneus Dianteiros", months: 36, km: 30, lastDate: new Date("2023/10/01"), lastKm: 59000 }));
        services.push(new Service({ name: "Pneus Traseiros", months: 36, km: 30, lastDate: new Date("2018/04/01"), lastKm: 45000 }));
        services.push(new Service({ name: "Pastilhas e discos de freio", months: 36, km: 30, lastDate: new Date("2019/04/01"), lastKm: 59000 }));
        services.push(new Service({ name: "Sistema de refrigeração", months: 36, km: 30, lastDate: new Date("2018/04/01"), lastKm: 0 }));
        services.push(new Service({ name: "Higienização ar condicionado", months: 6, km: 0, lastDate: new Date("2024/11/01"), lastKm: 97381 }));
        services.push(new Service({ name: "Bateria", months: 48, km: 0, lastDate: new Date("2021/06/01"), lastKm: 0 }));

        return services;
    }
}