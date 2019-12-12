import { requestGet } from '@/utils/request';

interface requestOption {
    [key: string]: any;
}
// https://testwx.taoraise.com/response/index/index.aspx?licence=taozhitianxia2019&nav=hotevent
const Home = {
    hoteventList: async function (params: object = {}) {
        return await requestGet({
            url: '/response/index/index.aspx',
            params
        })
    }

}
export default Home