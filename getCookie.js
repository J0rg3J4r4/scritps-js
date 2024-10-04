import {g as m} from "./virtualAccount.ktIUUr9w.js";

va = async () => {
    try {
        const {collectionCode: r} = await m()
          , o = await B({
            collectionCode: r
        });
        const virtualAccount = await m();
        console.log("Inyected code!", virtualAccount);
        return await b.post(A.apiUrlGetBalance, {
            encryptData: o
        })
    } catch (r) {
        throw new Error(r?.data.message)
    }
}

export {va as default};
