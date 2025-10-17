(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/openzeppelin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "prepareOpenZeppelinTransaction": ()=>prepareOpenZeppelinTransaction,
    "relayOpenZeppelinTransaction": ()=>relayOpenZeppelinTransaction
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
;
;
;
;
async function prepareOpenZeppelinTransaction(param) {
    let { account, serializableTransaction, transaction, gasless } = param;
    const forrwaderContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: gasless.relayerForwarderAddress,
        chain: transaction.chain,
        client: transaction.client
    });
    const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
        contract: forrwaderContract,
        method: "function getNonce(address) view returns (uint256)",
        params: [
            account.address
        ]
    });
    const [signature, message] = await (async ()=>{
        // TODO: handle special case for `approve` -> `permit` transactions
        if (!serializableTransaction.to) {
            throw new Error("OpenZeppelin transactions must have a 'to' address");
        }
        if (!serializableTransaction.gas) {
            throw new Error("OpenZeppelin transactions must have a 'gas' value");
        }
        if (!serializableTransaction.data) {
            throw new Error("OpenZeppelin transactions must have a 'data' value");
        }
        // chainless support!
        if (gasless.experimentalChainlessSupport) {
            const message = {
                chainid: BigInt(transaction.chain.id),
                data: serializableTransaction.data,
                from: account.address,
                gas: serializableTransaction.gas,
                nonce: nonce,
                to: serializableTransaction.to,
                value: 0n
            };
            return [
                await account.signTypedData({
                    domain: {
                        name: "GSNv2 Forwarder",
                        verifyingContract: forrwaderContract.address,
                        version: "0.0.1"
                    },
                    message,
                    primaryType: "ForwardRequest",
                    types: {
                        ForwardRequest: ChainAwareForwardRequest
                    }
                }),
                message
            ];
        }
        // else non-chainless support
        const message = {
            data: serializableTransaction.data,
            from: account.address,
            gas: serializableTransaction.gas,
            nonce: nonce,
            to: serializableTransaction.to,
            value: 0n
        };
        var _gasless_domainName, _gasless_domainVersion;
        return [
            await account.signTypedData({
                domain: {
                    chainId: transaction.chain.id,
                    name: (_gasless_domainName = gasless.domainName) !== null && _gasless_domainName !== void 0 ? _gasless_domainName : "GSNv2 Forwarder",
                    verifyingContract: forrwaderContract.address,
                    version: (_gasless_domainVersion = gasless.domainVersion) !== null && _gasless_domainVersion !== void 0 ? _gasless_domainVersion : "0.0.1"
                },
                message,
                primaryType: "ForwardRequest",
                types: {
                    ForwardRequest
                }
            }),
            message
        ];
    })();
    // TODO: handle special case for `approve` -> `permit`
    const messageType = "forward";
    return {
        message,
        messageType,
        signature
    };
}
const ForwardRequest = [
    {
        name: "from",
        type: "address"
    },
    {
        name: "to",
        type: "address"
    },
    {
        name: "value",
        type: "uint256"
    },
    {
        name: "gas",
        type: "uint256"
    },
    {
        name: "nonce",
        type: "uint256"
    },
    {
        name: "data",
        type: "bytes"
    }
];
const ChainAwareForwardRequest = [
    {
        name: "from",
        type: "address"
    },
    {
        name: "to",
        type: "address"
    },
    {
        name: "value",
        type: "uint256"
    },
    {
        name: "gas",
        type: "uint256"
    },
    {
        name: "nonce",
        type: "uint256"
    },
    {
        name: "data",
        type: "bytes"
    },
    {
        name: "chainid",
        type: "uint256"
    }
];
async function relayOpenZeppelinTransaction(options) {
    const { message, messageType, signature } = await prepareOpenZeppelinTransaction(options);
    const response = await fetch(options.gasless.relayerUrl, {
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
            forwarderAddress: options.gasless.relayerForwarderAddress,
            request: message,
            signature,
            type: messageType
        }),
        method: "POST"
    });
    if (!response.ok) {
        throw new Error("Failed to send transaction: ".concat(await response.text()));
    }
    const json = await response.json();
    if (!json.result) {
        throw new Error("Relay transaction failed: ".concat(json.message));
    }
    const transactionHash = JSON.parse(json.result).txHash;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(transactionHash)) {
        return {
            chain: options.transaction.chain,
            client: options.transaction.client,
            transactionHash
        };
    }
    throw new Error("Failed to send transaction: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(json)));
} //# sourceMappingURL=openzeppelin.js.map
}),
}]);

//# sourceMappingURL=8069e_thirdweb_dist_esm_transaction_actions_gasless_providers_openzeppelin_e182d58e.js.map