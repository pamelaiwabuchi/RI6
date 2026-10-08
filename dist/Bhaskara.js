export default class Bhaskara {
    calcular(a, b, c) {
        let delta = b ** 2 - 4 * a * c;
        if (delta < 0) {
            return [];
        }
        if (delta === 0) {
            let x = -b / (2 * a);
            return [x];
        }
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}
//# sourceMappingURL=Bhaskara.js.map