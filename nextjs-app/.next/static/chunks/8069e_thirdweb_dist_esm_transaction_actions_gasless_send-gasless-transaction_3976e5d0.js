(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/send-gasless-transaction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "sendGaslessTransaction": ()=>sendGaslessTransaction
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$transaction$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/transaction-store.js [app-client] (ecmascript)");
;
async function sendGaslessTransaction(param) {
    let { account, transaction, serializableTransaction, gasless } = param;
    // TODO: handle special case for mutlicall transactions!
    // Steps:
    // 1. check if the method is `multicall` by comparing the 4bytes data with the `multicall` selector
    // 2. split the rest of the data into its "parts"
    // 3. solidityPack the parts with the part data + the `account.address`
    // see v4: `core/classes/transactions.ts>Transaction>prepareGasless:L551`
    if (serializableTransaction.value && serializableTransaction.value > 0n) {
        throw new Error("Gasless transactions cannot have a value");
    }
    // TODO: multiply gas by 2 for some reason(?) - we do in v4, *should* we?
    let result;
    // biconomy
    if (gasless.provider === "biconomy") {
        const { relayBiconomyTransaction } = await __turbopack_context__.r("[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/biconomy.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        result = await relayBiconomyTransaction({
            account,
            gasless,
            serializableTransaction,
            transaction
        });
    }
    // openzeppelin
    if (gasless.provider === "openzeppelin") {
        const { relayOpenZeppelinTransaction } = await __turbopack_context__.r("[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/openzeppelin.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        result = await relayOpenZeppelinTransaction({
            account,
            gasless,
            serializableTransaction,
            transaction
        });
    }
    if (gasless.provider === "engine") {
        const { relayEngineTransaction } = await __turbopack_context__.r("[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/engine.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
        result = await relayEngineTransaction({
            account,
            gasless,
            serializableTransaction,
            transaction
        });
    }
    if (!result) {
        throw new Error("Unsupported gasless provider");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$transaction$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTransactionToStore"])({
        address: account.address,
        chainId: transaction.chain.id,
        transactionHash: result.transactionHash
    });
    return result;
} //# sourceMappingURL=send-gasless-transaction.js.map
}),
}]);

//# sourceMappingURL=8069e_thirdweb_dist_esm_transaction_actions_gasless_send-gasless-transaction_3976e5d0.js.map