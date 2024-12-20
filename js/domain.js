//Automobile
//Maintenance
class Service {
    constructor(service) {
        this.service = service;
    }

    getValidateDate(compareDate) {
        if (this.service.months > 0 && this.service.lastDate) {
            const validateDate = new Date(this.service.lastDate);
            validateDate.setMonth(validateDate.getMonth() + this.service.months);

            return validateDate;
        }

        return null;
    }

    getValidateKm(compareKm) {
        if (this.service.km > 0 && this.service.lastKm > 0) {
            return this.service.lastKm + (this.service.km * 1000);
        }

        return 0;
    }

    dateToState(currentDate, endDate) {
        if (endDate) {
            const intermedDate = new Date(endDate);
            intermedDate.setMonth(intermedDate.getMonth() - 2);

            if (currentDate >= endDate) {
                return 3;
            } else if (currentDate >= intermedDate) {
                return 2;
            } else {
                return 1;
            }
        }

        return 0;
    }

    kmToState(currentKm, endKm) {
        if (endKm > 0) {
            const intermedKm = endKm - 500;
            if (currentKm >= endKm) {
                return 3;
            } else if (currentKm >= intermedKm) {
                return 2;
            } else {
                return 1;
            }
        }

        return 0;
    }
}

class ConverterUtil {
    frmDate(inDate, strLocation) {
        return inDate ? inDate.toLocaleDateString(strLocation) : '';
    }

    frmKm(inKm, strLocation) {
        return inKm ? inKm.toLocaleString(strLocation) : 0;
    }
}