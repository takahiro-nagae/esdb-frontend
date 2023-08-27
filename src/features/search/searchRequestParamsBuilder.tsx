export class SearchParamsBuilder {
    private searchParams: URLSearchParams;

    constructor(searchParams: URLSearchParams) {
        this.searchParams = searchParams;
    }

    buildFreeSearchParams() {
        return '?search=' + this.searchParams.get('search');
    }

    buildDefaultSearchParams() {
        let params = '';
        params = '?enchantName=' + this.searchParams.get('enchantName');
        params += '&effect=' + this.searchParams.get('effect');
        params += '&effectVal=' + this.searchParams.get('effectVal');
        params += '&range=' + this.searchParams.get('range');
        params += '&rank=' + this.searchParams.get('rank');
        params += '&target=' + this.searchParams.get('target');
        params += '&position=' + this.searchParams.get('position');
        params += '&rankRange=' + this.searchParams.get('rankRange');

        return params;
    }
}
