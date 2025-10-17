module.exports = {

"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */ __turbopack_context__.s({
    "getAction": ()=>getAction
});
function getAction(client, actionFn, // Some minifiers drop `Function.prototype.name`, or replace it with short letters,
// meaning that `actionFn.name` will not always work. For that case, the consumer
// needs to pass the name explicitly.
name) {
    const action_implicit = client[actionFn.name];
    if (typeof action_implicit === 'function') return action_implicit;
    const action_explicit = client[name];
    if (typeof action_explicit === 'function') return action_explicit;
    return (params)=>actionFn(client, params);
} //# sourceMappingURL=getAction.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/filters/createFilterRequestScope.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Scopes `request` to the filter ID. If the client is a fallback, it will
 * listen for responses and scope the child transport `request` function
 * to the successful filter ID.
 */ __turbopack_context__.s({
    "createFilterRequestScope": ()=>createFilterRequestScope
});
function createFilterRequestScope(client, { method }) {
    const requestMap = {};
    if (client.transport.type === 'fallback') client.transport.onResponse?.(({ method: method_, response: id, status, transport })=>{
        if (status === 'success' && method === method_) requestMap[id] = transport.request;
    });
    return (id)=>requestMap[id] || client.request;
} //# sourceMappingURL=createFilterRequestScope.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/prepareEncodeFunctionData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "prepareEncodeFunctionData": ()=>prepareEncodeFunctionData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
;
;
;
;
const docsPath = '/docs/contract/encodeFunctionData';
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionNotFoundError"](functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionNotFoundError"](undefined, {
        docsPath
    });
    return {
        abi: [
            abiItem
        ],
        functionName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toFunctionSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem))
    };
} //# sourceMappingURL=prepareEncodeFunctionData.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodeFunctionData": ()=>encodeFunctionData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$prepareEncodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/prepareEncodeFunctionData.js [app-ssr] (ecmascript)");
;
;
;
function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (()=>{
        if (parameters.abi.length === 1 && parameters.functionName?.startsWith('0x')) return parameters;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$prepareEncodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareEncodeFunctionData"])(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = 'inputs' in abiItem && abiItem.inputs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(abiItem.inputs, args ?? []) : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        signature,
        data ?? '0x'
    ]);
} //# sourceMappingURL=encodeFunctionData.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/formatAbiItemWithArgs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatAbiItemWithArgs": ()=>formatAbiItemWithArgs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/stringify.js [app-ssr] (ecmascript)");
;
function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false }) {
    if (!('name' in abiItem)) return;
    if (!('inputs' in abiItem)) return;
    if (!abiItem.inputs) return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs.map((input, i)=>`${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(args[i]) : args[i]}`).join(', ')})`;
} //# sourceMappingURL=formatAbiItemWithArgs.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 *  Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number..
 *
 * - Docs: https://viem.sh/docs/utilities/formatUnits
 *
 * @example
 * import { formatUnits } from 'viem'
 *
 * formatUnits(420000000000n, 9)
 * // '420'
 */ __turbopack_context__.s({
    "formatUnits": ()=>formatUnits
});
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative) display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals)
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
} //# sourceMappingURL=formatUnits.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatEther": ()=>formatEther
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/unit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
;
;
function formatEther(wei, unit = 'wei') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(wei, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["etherUnits"][unit]);
} //# sourceMappingURL=formatEther.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/formatGwei.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatGwei": ()=>formatGwei
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/unit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
;
;
function formatGwei(wei, unit = 'wei') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(wei, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gweiUnits"][unit]);
} //# sourceMappingURL=formatGwei.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getContractError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getContractError": ()=>getContractError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
;
;
;
;
;
const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender }) {
    const error = err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContractError"] ? err : err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] ? err.walk((err)=>'data' in err) || err.walk() : {};
    const { code, data, details, message, shortMessage } = error;
    const cause = (()=>{
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiDecodingZeroDataError"]) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionZeroDataError"]({
            functionName
        });
        if ([
            EXECUTION_REVERTED_ERROR_CODE,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalRpcError"].code
        ].includes(code) && (data || details || message || shortMessage)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionRevertedError"]({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcRequestError"] ? details : shortMessage ?? message
            });
        }
        return err;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"](cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender
    });
} //# sourceMappingURL=getContractError.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverPublicKey.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "recoverPublicKey": ()=>recoverPublicKey
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
async function recoverPublicKey({ hash, signature }) {
    const hashHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(hash) ? hash : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(hash);
    const { secp256k1 } = await __turbopack_context__.r("[project]/node_modules/thirdweb/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
    const signature_ = (()=>{
        // typeof signature: `Signature`
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(s)).addRecoveryBit(recoveryBit);
        }
        // typeof signature: `Hex | ByteArray`
        const signatureHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(signature) ? signature : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(signature);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(signatureHex) !== 65) throw new Error('invalid signature length');
        const yParityOrV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
    if (yParityOrV === 27) return 0;
    if (yParityOrV === 28) return 1;
    throw new Error('Invalid yParityOrV value');
} //# sourceMappingURL=recoverPublicKey.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "recoverAddress": ()=>recoverAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$publicKeyToAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverPublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverPublicKey.js [app-ssr] (ecmascript)");
;
;
async function recoverAddress({ hash, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$publicKeyToAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicKeyToAddress"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverPublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverPublicKey"])({
        hash,
        signature
    }));
} //# sourceMappingURL=recoverAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/hashAuthorization.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "hashAuthorization": ()=>hashAuthorization
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
;
;
;
;
;
function hashAuthorization(parameters) {
    const { chainId, nonce, to } = parameters;
    const address = parameters.contractAddress ?? parameters.address;
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x05',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])([
            chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId) : '0x',
            address,
            nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce) : '0x'
        ])
    ]));
    if (to === 'bytes') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(hash);
    return hash;
} //# sourceMappingURL=hashAuthorization.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "recoverAuthorizationAddress": ()=>recoverAuthorizationAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$hashAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/hashAuthorization.js [app-ssr] (ecmascript)");
;
;
async function recoverAuthorizationAddress(parameters) {
    const { authorization, signature } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$hashAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashAuthorization"])(authorization),
        signature: signature ?? authorization
    });
} //# sourceMappingURL=recoverAuthorizationAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getNodeError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "containsNodeError": ()=>containsNodeError,
    "getNodeError": ()=>getNodeError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
;
;
;
;
function containsNodeError(err) {
    return err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidInputRpcError"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcRequestError"] && err.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].code;
}
function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] ? err.walk((e)=>e?.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].code) : err;
    if (executionRevertedError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"]({
        cause: err,
        message: executionRevertedError.details
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExecutionRevertedError"]({
        cause: err,
        message: err.details
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooLowError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooLowError"]({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonceTooHighError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonceTooHighError"]({
        cause: err,
        nonce: args?.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonceTooLowError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonceTooLowError"]({
        cause: err,
        nonce: args?.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonceMaxValueError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonceMaxValueError"]({
        cause: err,
        nonce: args?.nonce
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InsufficientFundsError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InsufficientFundsError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntrinsicGasTooHighError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntrinsicGasTooHighError"]({
        cause: err,
        gas: args?.gas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntrinsicGasTooLowError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntrinsicGasTooLowError"]({
        cause: err,
        gas: args?.gas
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionTypeNotSupportedError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionTypeNotSupportedError"]({
        cause: err
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"].nodeMessage.test(message)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        cause: err,
        maxFeePerGas: args?.maxFeePerGas,
        maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownNodeError"]({
        cause: err
    });
} //# sourceMappingURL=getNodeError.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getEstimateGasError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getEstimateGasError": ()=>getEstimateGasError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$estimateGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/estimateGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
;
;
;
function getEstimateGasError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeError"])(err, args);
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownNodeError"]) return err;
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$estimateGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EstimateGasExecutionError"](cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getEstimateGasError.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/formatters/extract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @description Picks out the keys from `value` that exist in the formatter..
 */ __turbopack_context__.s({
    "extract": ()=>extract
});
function extract(value_, { format }) {
    if (!format) return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys){
            if (key in value_) value[key] = value_[key];
            if (formatted[key] && typeof formatted[key] === 'object' && !Array.isArray(formatted[key])) extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
} //# sourceMappingURL=extract.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/stateOverride.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeAccountStateOverride": ()=>serializeAccountStateOverride,
    "serializeStateMapping": ()=>serializeStateMapping,
    "serializeStateOverride": ()=>serializeStateOverride
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/stateOverride.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
;
function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0) return undefined;
    return stateMapping.reduce((acc, { slot, value })=>{
        if (slot.length !== 66) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidBytesLengthError"]({
            size: slot.length,
            targetSize: 66,
            type: 'hex'
        });
        if (value.length !== 66) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidBytesLengthError"]({
            size: value.length,
            targetSize: 66,
            type: 'hex'
        });
        acc[slot] = value;
        return acc;
    }, {});
}
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined) rpcAccountStateOverride.code = code;
    if (balance !== undefined) rpcAccountStateOverride.balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(balance);
    if (nonce !== undefined) rpcAccountStateOverride.nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce);
    if (state !== undefined) rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StateAssignmentConflictError"]();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
function serializeStateOverride(parameters) {
    if (!parameters) return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address, {
            strict: false
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address
        });
        if (rpcStateOverride[address]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$stateOverride$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountStateConflictError"]({
            address: address
        });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
} //# sourceMappingURL=stateOverride.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "assertRequest": ()=>assertRequest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : undefined;
    if (account && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(account.address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: account.address
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (typeof gasPrice !== 'undefined' && (typeof maxFeePerGas !== 'undefined' || typeof maxPriorityFeePerGas !== 'undefined')) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeConflictError"]();
    if (maxFeePerGas && maxFeePerGas > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
} //# sourceMappingURL=assertRequest.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/blobsToCommitments.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "blobsToCommitments": ()=>blobsToCommitments
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
function blobsToCommitments(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(x)) : parameters.blobs;
    const commitments = [];
    for (const blob of blobs)commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
    return to === 'bytes' ? commitments : commitments.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(x));
} //# sourceMappingURL=blobsToCommitments.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/blobsToProofs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "blobsToProofs": ()=>blobsToProofs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
function blobsToProofs(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(x)) : parameters.blobs;
    const commitments = typeof parameters.commitments[0] === 'string' ? parameters.commitments.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(x)) : parameters.commitments;
    const proofs = [];
    for(let i = 0; i < blobs.length; i++){
        const blob = blobs[i];
        const commitment = commitments[i];
        proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
    }
    return to === 'bytes' ? proofs : proofs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(x));
} //# sourceMappingURL=blobsToProofs.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "commitmentToVersionedHash": ()=>commitmentToVersionedHash
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/sha256.js [app-ssr] (ecmascript)");
;
;
function commitmentToVersionedHash(parameters) {
    const { commitment, version = 1 } = parameters;
    const to = parameters.to ?? (typeof commitment === 'string' ? 'hex' : 'bytes');
    const versionedHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])(commitment, 'bytes');
    versionedHash.set([
        version
    ], 0);
    return to === 'bytes' ? versionedHash : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(versionedHash);
} //# sourceMappingURL=commitmentToVersionedHash.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "commitmentsToVersionedHashes": ()=>commitmentsToVersionedHashes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentToVersionedHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js [app-ssr] (ecmascript)");
;
function commitmentsToVersionedHashes(parameters) {
    const { commitments, version } = parameters;
    const to = parameters.to ?? (typeof commitments[0] === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const commitment of commitments){
        hashes.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentToVersionedHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitmentToVersionedHash"])({
            commitment,
            to,
            version
        }));
    }
    return hashes;
} //# sourceMappingURL=commitmentsToVersionedHashes.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/toBlobs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toBlobs": ()=>toBlobs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/blob.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/blob.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function toBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.data === 'string' ? 'hex' : 'bytes');
    const data = typeof parameters.data === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(parameters.data) : parameters.data;
    const size_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(data);
    if (!size_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyBlobError"]();
    if (size_ > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxBytesPerTransaction"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlobSizeTooLargeError"]({
        maxSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxBytesPerTransaction"],
        size: size_
    });
    const blobs = [];
    let active = true;
    let position = 0;
    while(active){
        const blob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCursor"])(new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesPerBlob"]));
        let size = 0;
        while(size < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldElementsPerBlob"]){
            const bytes = data.slice(position, position + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesPerFieldElement"] - 1));
            // Push a zero byte so the field element doesn't overflow the BLS modulus.
            blob.pushByte(0x00);
            // Push the current segment of data bytes.
            blob.pushBytes(bytes);
            // If we detect that the current segment of data bytes is less than 31 bytes,
            // we can stop processing and push a terminator byte to indicate the end of the blob.
            if (bytes.length < 31) {
                blob.pushByte(0x80);
                active = false;
                break;
            }
            size++;
            position += 31;
        }
        blobs.push(blob);
    }
    return to === 'bytes' ? blobs.map((x)=>x.bytes) : blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(x.bytes));
} //# sourceMappingURL=toBlobs.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toBlobSidecars": ()=>toBlobSidecars
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/blobsToCommitments.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/blobsToProofs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/toBlobs.js [app-ssr] (ecmascript)");
;
;
;
function toBlobSidecars(parameters) {
    const { data, kzg, to } = parameters;
    const blobs = parameters.blobs ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBlobs"])({
        data: data,
        to
    });
    const commitments = parameters.commitments ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
        blobs,
        kzg: kzg,
        to
    });
    const proofs = parameters.proofs ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blobsToProofs"])({
        blobs,
        commitments,
        kzg: kzg,
        to
    });
    const sidecars = [];
    for(let i = 0; i < blobs.length; i++)sidecars.push({
        blob: blobs[i],
        commitment: commitments[i],
        proof: proofs[i]
    });
    return sidecars;
} //# sourceMappingURL=toBlobSidecars.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getTransactionType": ()=>getTransactionType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
;
function getTransactionType(transaction) {
    if (transaction.type) return transaction.type;
    if (typeof transaction.authorizationList !== 'undefined') return 'eip7702';
    if (typeof transaction.blobs !== 'undefined' || typeof transaction.blobVersionedHashes !== 'undefined' || typeof transaction.maxFeePerBlobGas !== 'undefined' || typeof transaction.sidecars !== 'undefined') return 'eip4844';
    if (typeof transaction.maxFeePerGas !== 'undefined' || typeof transaction.maxPriorityFeePerGas !== 'undefined') {
        return 'eip1559';
    }
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined') return 'eip2930';
        return 'legacy';
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializableTransactionError"]({
        transaction
    });
} //# sourceMappingURL=getTransactionType.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeFunctionResult.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "decodeFunctionResult": ()=>decodeFunctionResult
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
;
;
;
const docsPath = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi,
            args,
            name: functionName
        });
        if (!item) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionNotFoundError"](functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionNotFoundError"](undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionOutputsNotFoundError"](abiItem.name, {
        docsPath
    });
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(abiItem.outputs, data);
    if (values && values.length > 1) return values;
    if (values && values.length === 1) return values[0];
    return undefined;
} //# sourceMappingURL=decodeFunctionResult.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodeDeployData": ()=>encodeDeployData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
;
;
;
const docsPath = '/docs/contract/encodeDeployData';
function encodeDeployData(parameters) {
    const { abi, args, bytecode } = parameters;
    if (!args || args.length === 0) return bytecode;
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorNotFoundError"]({
        docsPath
    });
    if (!('inputs' in description)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorParamsNotFoundError"]({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorParamsNotFoundError"]({
        docsPath
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(description.inputs, args);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        bytecode,
        data
    ]);
} //# sourceMappingURL=encodeDeployData.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/chain/getChainContractAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getChainContractAddress": ()=>getChainContractAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
;
function getChainContractAddress({ blockNumber, chain, contract: name }) {
    const contract = chain?.contracts?.[name];
    if (!contract) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainDoesNotSupportContract"]({
        chain,
        contract: {
            name
        }
    });
    if (blockNumber && contract.blockCreated && contract.blockCreated > blockNumber) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainDoesNotSupportContract"]({
        blockNumber,
        chain,
        contract: {
            name,
            blockCreated: contract.blockCreated
        }
    });
    return contract.address;
} //# sourceMappingURL=getChainContractAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getCallError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getCallError": ()=>getCallError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
;
;
;
function getCallError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeError"])(err, args);
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownNodeError"]) return err;
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallExecutionError"](cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getCallError.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withResolvers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s({
    "withResolvers": ()=>withResolvers
});
function withResolvers() {
    let resolve = ()=>undefined;
    let reject = ()=>undefined;
    const promise = new Promise((resolve_, reject_)=>{
        resolve = resolve_;
        reject = reject_;
    });
    return {
        promise,
        resolve,
        reject
    };
} //# sourceMappingURL=withResolvers.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createBatchScheduler": ()=>createBatchScheduler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withResolvers.js [app-ssr] (ecmascript)");
;
const schedulerCache = /*#__PURE__*/ new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort }) {
    const exec = async ()=>{
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args })=>args);
        if (args.length === 0) return;
        fn(args).then((data)=>{
            if (sort && Array.isArray(data)) data.sort(sort);
            for(let i = 0; i < scheduler.length; i++){
                const { resolve } = scheduler[i];
                resolve?.([
                    data[i],
                    data
                ]);
            }
        }).catch((err)=>{
            for(let i = 0; i < scheduler.length; i++){
                const { reject } = scheduler[i];
                reject?.(err);
            }
        });
    };
    const flush = ()=>schedulerCache.delete(id);
    const getBatchedArgs = ()=>getScheduler().map(({ args })=>args);
    const getScheduler = ()=>schedulerCache.get(id) || [];
    const setScheduler = (item)=>schedulerCache.set(id, [
            ...getScheduler(),
            item
        ]);
    return {
        flush,
        async schedule (args) {
            const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withResolvers"])();
            const split = shouldSplitBatch?.([
                ...getBatchedArgs(),
                args
            ]);
            if (split) exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({
                    args,
                    resolve,
                    reject
                });
                return promise;
            }
            setScheduler({
                args,
                resolve,
                reject
            });
            setTimeout(exec, wait);
            return promise;
        }
    };
} //# sourceMappingURL=createBatchScheduler.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/observe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s({
    "cleanupCache": ()=>cleanupCache,
    "listenersCache": ()=>listenersCache,
    "observe": ()=>observe
});
const listenersCache = /*#__PURE__*/ new Map();
const cleanupCache = /*#__PURE__*/ new Map();
let callbackCount = 0;
function observe(observerId, callbacks, fn) {
    const callbackId = ++callbackCount;
    const getListeners = ()=>listenersCache.get(observerId) || [];
    const unsubscribe = ()=>{
        const listeners = getListeners();
        listenersCache.set(observerId, listeners.filter((cb)=>cb.id !== callbackId));
    };
    const unwatch = ()=>{
        const listeners = getListeners();
        if (!listeners.some((cb)=>cb.id === callbackId)) return;
        const cleanup = cleanupCache.get(observerId);
        if (listeners.length === 1 && cleanup) {
            const p = cleanup();
            if (p instanceof Promise) p.catch(()=>{});
        }
        unsubscribe();
    };
    const listeners = getListeners();
    listenersCache.set(observerId, [
        ...listeners,
        {
            id: callbackId,
            fns: callbacks
        }
    ]);
    if (listeners && listeners.length > 0) return unwatch;
    const emit = {};
    for(const key in callbacks){
        emit[key] = (...args)=>{
            const listeners = getListeners();
            if (listeners.length === 0) return;
            for (const listener of listeners)listener.fns[key]?.(...args);
        };
    }
    const cleanup = fn(emit);
    if (typeof cleanup === 'function') cleanupCache.set(observerId, cleanup);
    return unwatch;
} //# sourceMappingURL=observe.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/wait.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "wait": ()=>wait
});
async function wait(time) {
    return new Promise((res)=>setTimeout(res, time));
} //# sourceMappingURL=wait.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/poll.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "poll": ()=>poll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/wait.js [app-ssr] (ecmascript)");
;
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
    let active = true;
    const unwatch = ()=>active = false;
    const watch = async ()=>{
        let data;
        if (emitOnBegin) data = await fn({
            unpoll: unwatch
        });
        const initialWait = await initialWaitTime?.(data) ?? interval;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wait"])(initialWait);
        const poll = async ()=>{
            if (!active) return;
            await fn({
                unpoll: unwatch
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wait"])(interval);
            poll();
        };
        poll();
    };
    watch();
    return unwatch;
} //# sourceMappingURL=poll.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withCache.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s({
    "getCache": ()=>getCache,
    "promiseCache": ()=>promiseCache,
    "responseCache": ()=>responseCache,
    "withCache": ()=>withCache
});
const promiseCache = /*#__PURE__*/ new Map();
const responseCache = /*#__PURE__*/ new Map();
function getCache(cacheKey) {
    const buildCache = (cacheKey, cache)=>({
            clear: ()=>cache.delete(cacheKey),
            get: ()=>cache.get(cacheKey),
            set: (data)=>cache.set(cacheKey, data)
        });
    const promise = buildCache(cacheKey, promiseCache);
    const response = buildCache(cacheKey, responseCache);
    return {
        clear: ()=>{
            promise.clear();
            response.clear();
        },
        promise,
        response
    };
}
async function withCache(fn, { cacheKey, cacheTime = Number.POSITIVE_INFINITY }) {
    const cache = getCache(cacheKey);
    // If a response exists in the cache, and it's not expired, return it
    // and do not invoke the promise.
    // If the max age is 0, the cache is disabled.
    const response = cache.response.get();
    if (response && cacheTime > 0) {
        const age = Date.now() - response.created.getTime();
        if (age < cacheTime) return response.data;
    }
    let promise = cache.promise.get();
    if (!promise) {
        promise = fn();
        // Store the promise in the cache so that subsequent invocations
        // will wait for the same promise to resolve (deduping).
        cache.promise.set(promise);
    }
    try {
        const data = await promise;
        // Store the response in the cache so that subsequent invocations
        // will return the same response.
        cache.response.set({
            created: new Date(),
            data
        });
        return data;
    } finally{
        // Clear the promise cache so that subsequent invocations will
        // invoke the promise again.
        cache.promise.clear();
    }
} //# sourceMappingURL=withCache.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "assertCurrentChain": ()=>assertCurrentChain
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
;
function assertCurrentChain({ chain, currentChainId }) {
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotFoundError"]();
    if (currentChainId !== chain.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainMismatchError"]({
        chain,
        currentChainId
    });
} //# sourceMappingURL=assertCurrentChain.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getTransactionError": ()=>getTransactionError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
;
;
;
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeError"])(err, args);
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownNodeError"]) return err;
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionExecutionError"](cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getTransactionError.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withRetry.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "withRetry": ()=>withRetry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/wait.js [app-ssr] (ecmascript)");
;
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = ()=>true } = {}) {
    return new Promise((resolve, reject)=>{
        const attemptRetry = async ({ count = 0 } = {})=>{
            const retry = async ({ error })=>{
                const delay = typeof delay_ === 'function' ? delay_({
                    count,
                    error
                }) : delay_;
                if (delay) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$wait$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wait"])(delay);
                attemptRetry({
                    count: count + 1
                });
            };
            try {
                const data = await fn();
                resolve(data);
            } catch (err) {
                if (count < retryCount && await shouldRetry({
                    count,
                    error: err
                })) return retry({
                    error: err
                });
                reject(err);
            }
        };
        attemptRetry();
    });
} //# sourceMappingURL=withRetry.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/uid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "uid": ()=>uid
});
const size = 256;
let index = size;
let buffer;
function uid(length = 11) {
    if (!buffer || index + length > size * 2) {
        buffer = '';
        index = 0;
        for(let i = 0; i < size; i++){
            buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
        }
    }
    return buffer.substring(index, index++ + length);
} //# sourceMappingURL=uid.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isNullUniversalResolverError": ()=>isNullUniversalResolverError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/contract.js [app-ssr] (ecmascript)");
;
;
function isNullUniversalResolverError(err) {
    if (!(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"])) return false;
    const cause = err.walk((e)=>e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionRevertedError"]);
    if (!(cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFunctionRevertedError"])) return false;
    if (cause.data?.errorName === 'HttpError') return true;
    if (cause.data?.errorName === 'ResolverError') return true;
    if (cause.data?.errorName === 'ResolverNotContract') return true;
    if (cause.data?.errorName === 'ResolverNotFound') return true;
    if (cause.data?.errorName === 'ReverseAddressMismatch') return true;
    if (cause.data?.errorName === 'UnsupportedResolverProfile') return true;
    return false;
} //# sourceMappingURL=errors.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "decodeFunctionData": ()=>decodeFunctionData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
;
;
;
;
;
function decodeFunctionData(parameters) {
    const { abi, data } = parameters;
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(data, 0, 4);
    const description = abi.find((x)=>x.type === 'function' && signature === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toFunctionSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(x)));
    if (!description) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionSignatureNotFoundError"](signature, {
        docsPath: '/docs/contract/decodeFunctionData'
    });
    return {
        functionName: description.name,
        args: 'inputs' in description && description.inputs && description.inputs.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(description.inputs, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(data, 4)) : undefined
    };
} //# sourceMappingURL=decodeFunctionData.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeErrorResult.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodeErrorResult": ()=>encodeErrorResult
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toFunctionSelector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/formatAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const docsPath = '/docs/contract/encodeErrorResult';
function encodeErrorResult(parameters) {
    const { abi, errorName, args } = parameters;
    let abiItem = abi[0];
    if (errorName) {
        const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi,
            args,
            name: errorName
        });
        if (!item) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiErrorNotFoundError"](errorName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'error') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiErrorNotFoundError"](undefined, {
        docsPath
    });
    const definition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem);
    const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toFunctionSelector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toFunctionSelector"])(definition);
    let data = '0x';
    if (args && args.length > 0) {
        if (!abiItem.inputs) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiErrorInputsNotFoundError"](abiItem.name, {
            docsPath
        });
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(abiItem.inputs, args);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        signature,
        data
    ]);
} //# sourceMappingURL=encodeErrorResult.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeFunctionResult.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodeFunctionResult": ()=>encodeFunctionResult
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/getAbiItem.js [app-ssr] (ecmascript)");
;
;
;
const docsPath = '/docs/contract/encodeFunctionResult';
function encodeFunctionResult(parameters) {
    const { abi, functionName, result } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$getAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbiItem"])({
            abi,
            name: functionName
        });
        if (!item) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionNotFoundError"](functionName, {
            docsPath
        });
        abiItem = item;
    }
    if (abiItem.type !== 'function') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionNotFoundError"](undefined, {
        docsPath
    });
    if (!abiItem.outputs) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiFunctionOutputsNotFoundError"](abiItem.name, {
        docsPath
    });
    const values = (()=>{
        if (abiItem.outputs.length === 0) return [];
        if (abiItem.outputs.length === 1) return [
            result
        ];
        if (Array.isArray(result)) return result;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArrayError"](result);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(abiItem.outputs, values);
} //# sourceMappingURL=encodeFunctionResult.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "localBatchGatewayRequest": ()=>localBatchGatewayRequest,
    "localBatchGatewayUrl": ()=>localBatchGatewayUrl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/abis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/solidity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeErrorResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeFunctionResult.js [app-ssr] (ecmascript)");
;
;
;
;
;
const localBatchGatewayUrl = 'x-batch-gateway:true';
async function localBatchGatewayRequest(parameters) {
    const { data, ccipRequest } = parameters;
    const { args: [queries] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchGatewayAbi"],
        data
    });
    const failures = [];
    const responses = [];
    await Promise.all(queries.map(async (query, i)=>{
        try {
            responses[i] = query.urls.includes(localBatchGatewayUrl) ? await localBatchGatewayRequest({
                data: query.data,
                ccipRequest
            }) : await ccipRequest(query);
            failures[i] = false;
        } catch (err) {
            failures[i] = true;
            responses[i] = encodeError(err);
        }
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionResult"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchGatewayAbi"],
        functionName: 'query',
        result: [
            failures,
            responses
        ]
    });
}
function encodeError(error) {
    if (error.name === 'HttpRequestError' && error.status) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeErrorResult"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchGatewayAbi"],
        errorName: 'HttpError',
        args: [
            error.status,
            error.shortMessage
        ]
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeErrorResult"])({
        abi: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["solidityError"]
        ],
        errorName: 'Error',
        args: [
            'shortMessage' in error ? error.shortMessage : error.message
        ]
    });
} //# sourceMappingURL=localBatchGatewayRequest.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/namehash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "namehash": ()=>namehash
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$encodedLabelToLabelhash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js [app-ssr] (ecmascript)");
;
;
;
;
;
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(result);
    const labels = name.split('.');
    // Iterate in reverse order building up hash
    for(let i = labels.length - 1; i >= 0; i -= 1){
        const hashFromEncodedLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$encodedLabelToLabelhash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodedLabelToLabelhash"])(labels[i]);
        const hashed = hashFromEncodedLabel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(hashFromEncodedLabel) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToBytes"])(labels[i]), 'bytes');
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
            result,
            hashed
        ]), 'bytes');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(result);
} //# sourceMappingURL=namehash.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/encodeLabelhash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodeLabelhash": ()=>encodeLabelhash
});
function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
} //# sourceMappingURL=encodeLabelhash.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/packetToBytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "packetToBytes": ()=>packetToBytes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$encodeLabelhash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/encodeLabelhash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$labelhash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/labelhash.js [app-ssr] (ecmascript)");
;
;
;
function packetToBytes(packet) {
    // strip leading and trailing `.`
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0) return new Uint8Array(1);
    const bytes = new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToBytes"])(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for(let i = 0; i < list.length; i++){
        let encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToBytes"])(list[i]);
        // if the length is > 255, make the encoded label value a labelhash
        // this is compatible with the universal resolver
        if (encoded.byteLength > 255) encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$encodeLabelhash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeLabelhash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$labelhash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelhash"])(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1) return bytes.slice(0, offset + 1);
    return bytes;
} //# sourceMappingURL=packetToBytes.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/avatar/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getGateway": ()=>getGateway,
    "getJsonImage": ()=>getJsonImage,
    "getMetadataAvatarUri": ()=>getMetadataAvatarUri,
    "getNftTokenUri": ()=>getNftTokenUri,
    "isImageUri": ()=>isImageUri,
    "parseAvatarUri": ()=>parseAvatarUri,
    "parseNftUri": ()=>parseNftUri,
    "resolveAvatarUri": ()=>resolveAvatarUri
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/ens.js [app-ssr] (ecmascript)");
;
;
const networkRegex = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, {
            method: 'HEAD'
        });
        // retrieve content type header to check if content is image
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    } catch (error) {
        // if error is not cors related then fail
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        // fail in NodeJS, since the error is not cors but any other network issue
        if (!Object.hasOwn(globalThis, 'Image')) return false;
        // in case of cors, use image api to validate if given url is an actual image
        return new Promise((resolve)=>{
            const img = new Image();
            img.onload = ()=>{
                resolve(true);
            };
            img.onerror = ()=>{
                resolve(false);
            };
            img.src = uri;
        });
    }
}
function getGateway(custom, defaultGateway) {
    if (!custom) return defaultGateway;
    if (custom.endsWith('/')) return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded) return {
        uri,
        isOnChain: true,
        isEncoded
    };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '' } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave) replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return {
            uri: replacedUri,
            isOnChain: false,
            isEncoded: false
        };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        // if svg, base64 encode
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false
        };
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarUriResolutionError"]({
        uri
    });
}
function getJsonImage(data) {
    // validation check for json data, must include one of theses properties
    if (typeof data !== 'object' || !('image' in data) && !('image_url' in data) && !('image_data' in data)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarInvalidMetadataError"]({
            data
        });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
    try {
        const res = await fetch(uri).then((res)=>res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res)
        });
        return image;
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarUriResolutionError"]({
            uri
        });
    }
}
async function parseAvatarUri({ gatewayUrls, uri }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({
        uri,
        gatewayUrls
    });
    if (isOnChain) return resolvedURI;
    // check if resolvedURI is an image, if it is return the url
    const isImage = await isImageUri(resolvedURI);
    if (isImage) return resolvedURI;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarUriResolutionError"]({
        uri
    });
}
function parseNftUri(uri_) {
    let uri = uri_;
    // parse valid nft spec (CAIP-22/CAIP-29)
    // @see: https://github.com/ChainAgnostic/CAIPs/tree/master/CAIPs
    if (uri.startsWith('did:nft:')) {
        // convert DID to CAIP
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarInvalidNftUriError"]({
        reason: 'Only EIP-155 supported'
    });
    if (!chainID) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarInvalidNftUriError"]({
        reason: 'Chain ID not found'
    });
    if (!contractAddress) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarInvalidNftUriError"]({
        reason: 'Contract address not found'
    });
    if (!tokenID) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarInvalidNftUriError"]({
        reason: 'Token ID not found'
    });
    if (!erc_namespace) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarInvalidNftUriError"]({
        reason: 'ERC namespace not found'
    });
    return {
        chainID: Number.parseInt(chainID, 10),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: 'tokenId',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'tokenURI',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    if (nft.namespace === 'erc1155') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [
                        {
                            name: '_id',
                            type: 'uint256'
                        }
                    ],
                    outputs: [
                        {
                            name: '',
                            type: 'string'
                        }
                    ]
                }
            ],
            functionName: 'uri',
            args: [
                BigInt(nft.tokenID)
            ]
        });
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsAvatarUnsupportedNamespaceError"]({
        namespace: nft.namespace
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseAvatarRecord": ()=>parseAvatarRecord
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/avatar/utils.js [app-ssr] (ecmascript)");
;
async function parseAvatarRecord(client, { gatewayUrls, record }) {
    if (/eip155:/i.test(record)) return parseNftAvatarUri(client, {
        gatewayUrls,
        record
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAvatarUri"])({
        uri: record,
        gatewayUrls
    });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
    // parse NFT URI into properties
    const nft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNftUri"])(record);
    // fetch tokenURI from the NFT contract
    const nftUri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNftTokenUri"])(client, {
        nft
    });
    // resolve the URI from the fetched tokenURI
    const { uri: resolvedNftUri, isOnChain, isEncoded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAvatarUri"])({
        uri: nftUri,
        gatewayUrls
    });
    // if the resolved URI is on chain, return the data
    if (isOnChain && (resolvedNftUri.includes('data:application/json;base64,') || resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded ? atob(resolvedNftUri.replace('data:application/json;base64,', '')) : resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAvatarUri"])({
            uri: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getJsonImage"])(decoded),
            gatewayUrls
        });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155') uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$avatar$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMetadataAvatarUri"])({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId)
    });
} //# sourceMappingURL=parseAvatarRecord.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/formatters/feeHistory.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatFeeHistory": ()=>formatFeeHistory
});
function formatFeeHistory(feeHistory) {
    return {
        baseFeePerGas: feeHistory.baseFeePerGas.map((value)=>BigInt(value)),
        gasUsedRatio: feeHistory.gasUsedRatio,
        oldestBlock: BigInt(feeHistory.oldestBlock),
        reward: feeHistory.reward?.map((reward)=>reward.map((value)=>BigInt(value)))
    };
} //# sourceMappingURL=feeHistory.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/formatters/proof.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatProof": ()=>formatProof
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
function formatStorageProof(storageProof) {
    return storageProof.map((proof)=>({
            ...proof,
            value: BigInt(proof.value)
        }));
}
function formatProof(proof) {
    return {
        ...proof,
        balance: proof.balance ? BigInt(proof.balance) : undefined,
        nonce: proof.nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(proof.nonce) : undefined,
        storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : undefined
    };
} //# sourceMappingURL=proof.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/verifyAuthorization.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "verifyAuthorization": ()=>verifyAuthorization
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-ssr] (ecmascript)");
;
;
;
async function verifyAuthorization({ address, authorization, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
        authorization,
        signature
    }));
} //# sourceMappingURL=verifyAuthorization.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeSignature": ()=>serializeSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
;
;
;
function serializeSignature({ r, s, to = 'hex', v, yParity }) {
    const yParity_ = (()=>{
        if (yParity === 0 || yParity === 1) return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n)) return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    const signature = `0x${new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secp256k1"].Signature((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
    if (to === 'hex') return signature;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(signature);
} //# sourceMappingURL=serializeSignature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/toPrefixedMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toPrefixedMessage": ()=>toPrefixedMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/strings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
function toPrefixedMessage(message_) {
    const message = (()=>{
        if (typeof message_ === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])(message_);
        if (typeof message_.raw === 'string') return message_.raw;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(message_.raw);
    })();
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$strings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presignMessagePrefix"]}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(message)}`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        prefix,
        message
    ]);
} //# sourceMappingURL=toPrefixedMessage.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/hashMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "hashMessage": ()=>hashMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$toPrefixedMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/toPrefixedMessage.js [app-ssr] (ecmascript)");
;
;
function hashMessage(message, to_) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$toPrefixedMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPrefixedMessage"])(message), to_);
} //# sourceMappingURL=hashMessage.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/siwe/parseSiweMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @description Parses EIP-4361 formatted message into message fields object.
 *
 * @see https://eips.ethereum.org/EIPS/eip-4361
 *
 * @returns EIP-4361 fields object
 */ __turbopack_context__.s({
    "parseSiweMessage": ()=>parseSiweMessage
});
function parseSiweMessage(message) {
    const { scheme, statement, ...prefix } = message.match(prefixRegex)?.groups ?? {};
    const { chainId, expirationTime, issuedAt, notBefore, requestId, ...suffix } = message.match(suffixRegex)?.groups ?? {};
    const resources = message.split('Resources:')[1]?.split('\n- ').slice(1);
    return {
        ...prefix,
        ...suffix,
        ...chainId ? {
            chainId: Number(chainId)
        } : {},
        ...expirationTime ? {
            expirationTime: new Date(expirationTime)
        } : {},
        ...issuedAt ? {
            issuedAt: new Date(issuedAt)
        } : {},
        ...notBefore ? {
            notBefore: new Date(notBefore)
        } : {},
        ...requestId ? {
            requestId
        } : {},
        ...resources ? {
            resources
        } : {},
        ...scheme ? {
            scheme
        } : {},
        ...statement ? {
            statement
        } : {}
    };
}
// https://regexr.com/80gdj
const prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
// https://regexr.com/80gf9
const suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/; //# sourceMappingURL=parseSiweMessage.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/siwe/validateSiweMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "validateSiweMessage": ()=>validateSiweMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
;
;
function validateSiweMessage(parameters) {
    const { address, domain, message, nonce, scheme, time = new Date() } = parameters;
    if (domain && message.domain !== domain) return false;
    if (nonce && message.nonce !== nonce) return false;
    if (scheme && message.scheme !== scheme) return false;
    if (message.expirationTime && time >= message.expirationTime) return false;
    if (message.notBefore && time < message.notBefore) return false;
    try {
        if (!message.address) return false;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(message.address, {
            strict: false
        })) return false;
        if (address && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(message.address, address)) return false;
    } catch  {
        return false;
    }
    return true;
} //# sourceMappingURL=validateSiweMessage.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withDedupe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "promiseCache": ()=>promiseCache,
    "withDedupe": ()=>withDedupe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/lru.js [app-ssr] (ecmascript)");
;
const promiseCache = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](8192);
function withDedupe(fn, { enabled = true, id }) {
    if (!enabled || !id) return fn();
    if (promiseCache.get(id)) return promiseCache.get(id);
    const promise = fn().finally(()=>promiseCache.delete(id));
    promiseCache.set(id, promise);
    return promise;
} //# sourceMappingURL=withDedupe.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/buildRequest.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "buildRequest": ()=>buildRequest,
    "shouldRetry": ()=>shouldRetry
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/rpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withDedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withDedupe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/stringify.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function buildRequest(request, options = {}) {
    return async (args, overrideOptions = {})=>{
        const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid } = {
            ...options,
            ...overrideOptions
        };
        const { method } = args;
        if (methods?.exclude?.includes(method)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"](new Error('method not supported'), {
            method
        });
        if (methods?.include && !methods.include.includes(method)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"](new Error('method not supported'), {
            method
        });
        const requestId = dedupe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])(`${uid}.${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(args)}`) : undefined;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withDedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withDedupe"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                try {
                    return await request(args);
                } catch (err_) {
                    const err = err_;
                    switch(err.code){
                        // -32700
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseRpcError"](err);
                        // -32600
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidRequestRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidRequestRpcError"](err);
                        // -32601
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodNotFoundRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodNotFoundRpcError"](err, {
                                method: args.method
                            });
                        // -32602
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidParamsRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidParamsRpcError"](err);
                        // -32603
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalRpcError"](err);
                        // -32000
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidInputRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidInputRpcError"](err);
                        // -32001
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceNotFoundRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceNotFoundRpcError"](err);
                        // -32002
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceUnavailableRpcError"](err);
                        // -32003
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionRejectedRpcError"](err);
                        // -32004
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodNotSupportedRpcError"](err, {
                                method: args.method
                            });
                        // -32005
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitExceededRpcError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitExceededRpcError"](err);
                        // -32006
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcVersionUnsupportedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcVersionUnsupportedError"](err);
                        // 4001
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](err);
                        // 4100
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnauthorizedProviderError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnauthorizedProviderError"](err);
                        // 4200
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedProviderMethodError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedProviderMethodError"](err);
                        // 4900
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderDisconnectedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProviderDisconnectedError"](err);
                        // 4901
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainDisconnectedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainDisconnectedError"](err);
                        // 4902
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwitchChainError"](err);
                        // 5700
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedNonOptionalCapabilityError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedNonOptionalCapabilityError"](err);
                        // 5710
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedChainIdError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedChainIdError"](err);
                        // 5720
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DuplicateIdError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DuplicateIdError"](err);
                        // 5730
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownBundleIdError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownBundleIdError"](err);
                        // 5740
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BundleTooLargeError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BundleTooLargeError"](err);
                        // 5750
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AtomicReadyWalletRejectedUpgradeError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AtomicReadyWalletRejectedUpgradeError"](err);
                        // 5760
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AtomicityNotSupportedError"].code:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AtomicityNotSupportedError"](err);
                        // CAIP-25: User Rejected Error
                        // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
                        case 5000:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserRejectedRequestError"](err);
                        default:
                            if (err_ instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]) throw err_;
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownRpcError"](err);
                    }
                }
            }, {
                delay: ({ count, error })=>{
                    // If we find a Retry-After header, let's retry after the given time.
                    if (error && error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"]) {
                        const retryAfter = error?.headers?.get('Retry-After');
                        if (retryAfter?.match(/\d/)) return Number.parseInt(retryAfter, 10) * 1000;
                    }
                    // Otherwise, let's retry with an exponential backoff.
                    return ~~(1 << count) * retryDelay;
                },
                retryCount,
                shouldRetry: ({ error })=>shouldRetry(error)
            }), {
            enabled: dedupe,
            id: requestId
        });
    };
}
function shouldRetry(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === -1) return true; // Unknown error
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LimitExceededRpcError"].code) return true;
        if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalRpcError"].code) return true;
        return false;
    }
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"] && error.status) {
        // Forbidden
        if (error.status === 403) return true;
        // Request Timeout
        if (error.status === 408) return true;
        // Request Entity Too Large
        if (error.status === 413) return true;
        // Too Many Requests
        if (error.status === 429) return true;
        // Internal Server Error
        if (error.status === 500) return true;
        // Bad Gateway
        if (error.status === 502) return true;
        // Service Unavailable
        if (error.status === 503) return true;
        // Gateway Timeout
        if (error.status === 504) return true;
        return false;
    }
    return true;
} //# sourceMappingURL=buildRequest.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/id.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "idCache": ()=>idCache
});
function createIdStore() {
    return {
        current: 0,
        take () {
            return this.current++;
        },
        reset () {
            this.current = 0;
        }
    };
}
const idCache = /*#__PURE__*/ createIdStore(); //# sourceMappingURL=id.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/http.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getHttpRpcClient": ()=>getHttpRpcClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/id.js [app-ssr] (ecmascript)");
;
;
;
;
function getHttpRpcClient(url, options = {}) {
    return {
        async request (params) {
            const { body, fetchFn = options.fetchFn ?? fetch, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 10_000 } = params;
            const fetchOptions = {
                ...options.fetchOptions ?? {},
                ...params.fetchOptions ?? {}
            };
            const { headers, method, signal: signal_ } = fetchOptions;
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withTimeout"])(async ({ signal })=>{
                    const init = {
                        ...fetchOptions,
                        body: Array.isArray(body) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(body.map((body)=>({
                                jsonrpc: '2.0',
                                id: body.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["idCache"].take(),
                                ...body
                            }))) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])({
                            jsonrpc: '2.0',
                            id: body.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["idCache"].take(),
                            ...body
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            ...headers
                        },
                        method: method || 'POST',
                        signal: signal_ || (timeout > 0 ? signal : null)
                    };
                    const request = new Request(url, init);
                    const args = await onRequest?.(request, init) ?? {
                        ...init,
                        url
                    };
                    const response = await fetchFn(args.url ?? url, args);
                    return response;
                }, {
                    errorInstance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeoutError"]({
                        body,
                        url
                    }),
                    timeout,
                    signal: true
                });
                if (onResponse) await onResponse(response);
                let data;
                if (response.headers.get('Content-Type')?.startsWith('application/json')) data = await response.json();
                else {
                    data = await response.text();
                    try {
                        data = JSON.parse(data || '{}');
                    } catch (err) {
                        if (response.ok) throw err;
                        data = {
                            error: data
                        };
                    }
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                        body,
                        details: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(data.error) || response.statusText,
                        headers: response.headers,
                        status: response.status,
                        url
                    });
                }
                return data;
            } catch (err) {
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"]) throw err;
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeoutError"]) throw err;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                    body,
                    cause: err,
                    url
                });
            }
        }
    };
} //# sourceMappingURL=http.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/socket.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getSocketRpcClient": ()=>getSocketRpcClient,
    "socketClientCache": ()=>socketClientCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/promise/withTimeout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/id.js [app-ssr] (ecmascript)");
;
;
;
;
const socketClientCache = /*#__PURE__*/ new Map();
async function getSocketRpcClient(parameters) {
    const { getSocket, keepAlive = true, key = 'socket', reconnect = true, url } = parameters;
    const { interval: keepAliveInterval = 30_000 } = typeof keepAlive === 'object' ? keepAlive : {};
    const { attempts = 5, delay = 2_000 } = typeof reconnect === 'object' ? reconnect : {};
    const id = JSON.stringify({
        keepAlive,
        key,
        url,
        reconnect
    });
    let socketClient = socketClientCache.get(id);
    // If the socket already exists, return it.
    if (socketClient) return socketClient;
    let reconnectCount = 0;
    const { schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBatchScheduler"])({
        id,
        fn: async ()=>{
            // Set up a cache for incoming "synchronous" requests.
            const requests = new Map();
            // Set up a cache for subscriptions (eth_subscribe).
            const subscriptions = new Map();
            let error;
            let socket;
            let keepAliveTimer;
            let reconnectInProgress = false;
            function attemptReconnect() {
                // Attempt to reconnect.
                if (reconnect && reconnectCount < attempts) {
                    if (reconnectInProgress) return;
                    reconnectInProgress = true;
                    reconnectCount++;
                    // Make sure the previous socket is definitely closed.
                    socket?.close();
                    setTimeout(async ()=>{
                        // biome-ignore lint/suspicious/noConsole: _
                        await setup().catch(console.error);
                        reconnectInProgress = false;
                    }, delay);
                } else {
                    requests.clear();
                    subscriptions.clear();
                }
            }
            // Set up socket implementation.
            async function setup() {
                const result = await getSocket({
                    onClose () {
                        // Notify all requests and subscriptions of the closure error.
                        for (const request of requests.values())request.onError?.(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocketClosedError"]({
                            url
                        }));
                        for (const subscription of subscriptions.values())subscription.onError?.(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocketClosedError"]({
                            url
                        }));
                        attemptReconnect();
                    },
                    onError (error_) {
                        error = error_;
                        // Notify all requests and subscriptions of the error.
                        for (const request of requests.values())request.onError?.(error);
                        for (const subscription of subscriptions.values())subscription.onError?.(error);
                        attemptReconnect();
                    },
                    onOpen () {
                        error = undefined;
                        reconnectCount = 0;
                    },
                    onResponse (data) {
                        const isSubscription = data.method === 'eth_subscription';
                        const id = isSubscription ? data.params.subscription : data.id;
                        const cache = isSubscription ? subscriptions : requests;
                        const callback = cache.get(id);
                        if (callback) callback.onResponse(data);
                        if (!isSubscription) cache.delete(id);
                    }
                });
                socket = result;
                if (keepAlive) {
                    if (keepAliveTimer) clearInterval(keepAliveTimer);
                    keepAliveTimer = setInterval(()=>socket.ping?.(), keepAliveInterval);
                }
                if (reconnect && subscriptions.size > 0) {
                    const subscriptionEntries = subscriptions.entries();
                    for (const [key, { onResponse, body, onError }] of subscriptionEntries){
                        if (!body) continue;
                        subscriptions.delete(key);
                        socketClient?.request({
                            body,
                            onResponse,
                            onError
                        });
                    }
                }
                return result;
            }
            await setup();
            error = undefined;
            // Create a new socket instance.
            socketClient = {
                close () {
                    keepAliveTimer && clearInterval(keepAliveTimer);
                    socket.close();
                    socketClientCache.delete(id);
                },
                get socket () {
                    return socket;
                },
                request ({ body, onError, onResponse }) {
                    if (error && onError) onError(error);
                    const id = body.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["idCache"].take();
                    const callback = (response)=>{
                        if (typeof response.id === 'number' && id !== response.id) return;
                        // If we are subscribing to a topic, we want to set up a listener for incoming
                        // messages.
                        if (body.method === 'eth_subscribe' && typeof response.result === 'string') subscriptions.set(response.result, {
                            onResponse: callback,
                            onError,
                            body
                        });
                        // If we are unsubscribing from a topic, we want to remove the listener.
                        if (body.method === 'eth_unsubscribe') subscriptions.delete(body.params?.[0]);
                        onResponse(response);
                    };
                    requests.set(id, {
                        onResponse: callback,
                        onError
                    });
                    try {
                        socket.request({
                            body: {
                                jsonrpc: '2.0',
                                id,
                                ...body
                            }
                        });
                    } catch (error) {
                        onError?.(error);
                    }
                },
                requestAsync ({ body, timeout = 10_000 }) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withTimeout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withTimeout"])(()=>new Promise((onResponse, onError)=>this.request({
                                body,
                                onError,
                                onResponse
                            })), {
                        errorInstance: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeoutError"]({
                            body,
                            url
                        }),
                        timeout
                    });
                },
                requests,
                subscriptions,
                url
            };
            socketClientCache.set(id, socketClient);
            return [
                socketClient
            ];
        }
    });
    const [_, [socketClient_]] = await schedule();
    return socketClient_;
} //# sourceMappingURL=socket.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/webSocket.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getWebSocketRpcClient": ()=>getWebSocketRpcClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/socket.js [app-ssr] (ecmascript)");
;
;
async function getWebSocketRpcClient(url, options = {}) {
    const { keepAlive, reconnect } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSocketRpcClient"])({
        async getSocket ({ onClose, onError, onOpen, onResponse }) {
            const WebSocket = await __turbopack_context__.r("[project]/node_modules/isows/_esm/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>module.WebSocket);
            const socket = new WebSocket(url);
            function onClose_() {
                socket.removeEventListener('close', onClose_);
                socket.removeEventListener('message', onMessage);
                socket.removeEventListener('error', onError);
                socket.removeEventListener('open', onOpen);
                onClose();
            }
            function onMessage({ data }) {
                // ignore empty messages
                if (typeof data === 'string' && data.trim().length === 0) return;
                try {
                    const _data = JSON.parse(data);
                    onResponse(_data);
                } catch (error) {
                    onError(error);
                }
            }
            // Setup event listeners for RPC & subscription responses.
            socket.addEventListener('close', onClose_);
            socket.addEventListener('message', onMessage);
            socket.addEventListener('error', onError);
            socket.addEventListener('open', onOpen);
            // Wait for the socket to open.
            if (socket.readyState === WebSocket.CONNECTING) {
                await new Promise((resolve, reject)=>{
                    if (!socket) return;
                    socket.onopen = resolve;
                    socket.onerror = reject;
                });
            }
            const { close: close_ } = socket;
            return Object.assign(socket, {
                close () {
                    close_.bind(socket)();
                    onClose_();
                },
                ping () {
                    try {
                        if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebSocketRequestError"]({
                            url: socket.url,
                            cause: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocketClosedError"]({
                                url: socket.url
                            })
                        });
                        const body = {
                            jsonrpc: '2.0',
                            id: null,
                            method: 'net_version',
                            params: []
                        };
                        socket.send(JSON.stringify(body));
                    } catch (error) {
                        onError(error);
                    }
                },
                request ({ body }) {
                    if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebSocketRequestError"]({
                        body,
                        url: socket.url,
                        cause: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocketClosedError"]({
                            url: socket.url
                        })
                    });
                    return socket.send(JSON.stringify(body));
                }
            });
        },
        keepAlive,
        reconnect,
        url
    });
} //# sourceMappingURL=webSocket.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/compat.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// TODO(v3): This file is here for backwards compatibility, and to prevent breaking changes.
// These APIs will be removed in v3.
__turbopack_context__.s({
    "getSocket": ()=>getSocket,
    "rpc": ()=>rpc
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/rpc/webSocket.js [app-ssr] (ecmascript)");
;
;
function webSocket(socketClient, { body, onError, onResponse }) {
    socketClient.request({
        body,
        onError,
        onResponse
    });
    return socketClient;
}
async function webSocketAsync(socketClient, { body, timeout = 10_000 }) {
    return socketClient.requestAsync({
        body,
        timeout
    });
}
async function getSocket(url) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url);
    return Object.assign(client.socket, {
        requests: client.requests,
        subscriptions: client.subscriptions
    });
}
const rpc = {
    /**
     * @deprecated use `getHttpRpcClient` instead.
     *
     * ```diff
     * -import { rpc } from 'viem/utils'
     * +import { getHttpRpcClient } from 'viem/utils'
     *
     * -rpc.http(url, params)
     * +const httpClient = getHttpRpcClient(url)
     * +httpClient.request(params)
     * ```
     */ http (url, params) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHttpRpcClient"])(url).request(params);
    },
    /**
     * @deprecated use `getWebSocketRpcClient` instead.
     *
     * ```diff
     * -import { rpc } from 'viem/utils'
     * +import { getWebSocketRpcClient } from 'viem/utils'
     *
     * -rpc.webSocket(url, params)
     * +const webSocketClient = getWebSocketRpcClient(url)
     * +webSocketClient.request(params)
     * ```
     */ webSocket,
    /**
     * @deprecated use `getWebSocketRpcClient` instead.
     *
     * ```diff
     * -import { rpc } from 'viem/utils'
     * +import { getWebSocketRpcClient } from 'viem/utils'
     *
     * -const response = await rpc.webSocketAsync(url, params)
     * +const webSocketClient = getWebSocketRpcClient(url)
     * +const response = await webSocketClient.requestAsync(params)
     * ```
     */ webSocketAsync
}; /* c8 ignore end */  //# sourceMappingURL=compat.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeDeployData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "decodeDeployData": ()=>decodeDeployData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
;
;
const docsPath = '/docs/contract/decodeDeployData';
function decodeDeployData(parameters) {
    const { abi, bytecode, data } = parameters;
    if (data === bytecode) return {
        bytecode
    };
    const description = abi.find((x)=>'type' in x && x.type === 'constructor');
    if (!description) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorNotFoundError"]({
        docsPath
    });
    if (!('inputs' in description)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorParamsNotFoundError"]({
        docsPath
    });
    if (!description.inputs || description.inputs.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiConstructorParamsNotFoundError"]({
        docsPath
    });
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(description.inputs, `0x${data.replace(bytecode, '')}`);
    return {
        args,
        bytecode
    };
} //# sourceMappingURL=decodeDeployData.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodePacked.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "encodePacked": ()=>encodePacked
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/abi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/regex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function encodePacked(types, values) {
    if (types.length !== values.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbiEncodingLengthMismatchError"]({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encode(type, value));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])(data);
}
function encode(type, value, isArray = false) {
    if (type === 'address') {
        const address = value;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(address.toLowerCase(), {
            size: isArray ? 32 : null
        });
    }
    if (type === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])(value);
    if (type === 'bytes') return value;
    if (type === 'bool') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolToHex"])(value), {
        size: isArray ? 32 : 1
    });
    const intMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"]);
    if (intMatch) {
        const [_type, baseType, bits = '256'] = intMatch;
        const size = Number.parseInt(bits, 10) / 8;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value, {
            size: isArray ? 32 : size,
            signed: baseType === 'int'
        });
    }
    const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"]);
    if (bytesMatch) {
        const [_type, size] = bytesMatch;
        if (Number.parseInt(size, 10) !== (value.length - 2) / 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesSizeMismatchError"]({
            expectedSize: Number.parseInt(size, 10),
            givenSize: (value.length - 2) / 2
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(value, {
            dir: 'right',
            size: isArray ? 32 : null
        });
    }
    const arrayMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRegex"]);
    if (arrayMatch && Array.isArray(value)) {
        const [_type, childType] = arrayMatch;
        const data = [];
        for(let i = 0; i < value.length; i++){
            data.push(encode(childType, value[i], true));
        }
        if (data.length === 0) return '0x';
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])(data);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnsupportedPackedAbiType"](type);
} //# sourceMappingURL=encodePacked.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isBytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isBytes": ()=>isBytes
});
function isBytes(value) {
    if (!value) return false;
    if (typeof value !== 'object') return false;
    if (!('BYTES_PER_ELEMENT' in value)) return false;
    return value.BYTES_PER_ELEMENT === 1 && value.constructor.name === 'Uint8Array';
} //# sourceMappingURL=isBytes.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/getContractAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getContractAddress": ()=>getContractAddress,
    "getCreate2Address": ()=>getCreate2Address,
    "getCreateAddress": ()=>getCreateAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function getContractAddress(opts) {
    if (opts.opcode === 'CREATE2') return getCreate2Address(opts);
    return getCreateAddress(opts);
}
function getCreateAddress(opts) {
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(opts.from));
    let nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(opts.nonce);
    if (nonce[0] === 0) nonce = new Uint8Array([]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(`0x${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])([
        from,
        nonce
    ], 'bytes')).slice(26)}`);
}
function getCreate2Address(opts) {
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(opts.from));
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(opts.salt) ? opts.salt : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(opts.salt), {
        size: 32
    });
    const bytecodeHash = (()=>{
        if ('bytecodeHash' in opts) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBytes"])(opts.bytecodeHash)) return opts.bytecodeHash;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(opts.bytecodeHash);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(opts.bytecode, 'bytes');
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])('0xff'),
        from,
        salt,
        bytecodeHash
    ])), 12));
} //# sourceMappingURL=getContractAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/fromBlobs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fromBlobs": ()=>fromBlobs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
function fromBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = typeof parameters.blobs[0] === 'string' ? parameters.blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(x)) : parameters.blobs;
    const length = blobs.reduce((length, blob)=>length + blob.length, 0);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCursor"])(new Uint8Array(length));
    let active = true;
    for (const blob of blobs){
        const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCursor"])(blob);
        while(active && cursor.position < blob.length){
            // First byte will be a zero 0x00 byte – we can skip.
            cursor.incrementPosition(1);
            let consume = 31;
            if (blob.length - cursor.position < 31) consume = blob.length - cursor.position;
            for(const _ in Array.from({
                length: consume
            })){
                const byte = cursor.readByte();
                const isTerminator = byte === 0x80 && !cursor.inspectBytes(cursor.remaining).includes(0x80);
                if (isTerminator) {
                    active = false;
                    break;
                }
                data.pushByte(byte);
            }
        }
    }
    const trimmedData = data.bytes.slice(0, data.position);
    return to === 'hex' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(trimmedData) : trimmedData;
} //# sourceMappingURL=fromBlobs.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/sidecarsToVersionedHashes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "sidecarsToVersionedHashes": ()=>sidecarsToVersionedHashes
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentToVersionedHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js [app-ssr] (ecmascript)");
;
function sidecarsToVersionedHashes(parameters) {
    const { sidecars, version } = parameters;
    const to = parameters.to ?? (typeof sidecars[0].blob === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const { commitment } of sidecars){
        hashes.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentToVersionedHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitmentToVersionedHash"])({
            commitment,
            to,
            version
        }));
    }
    return hashes;
} //# sourceMappingURL=sidecarsToVersionedHashes.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ccip.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ccipRequest": ()=>ccipRequest,
    "offchainLookup": ()=>offchainLookup,
    "offchainLookupAbiItem": ()=>offchainLookupAbiItem,
    "offchainLookupSignature": ()=>offchainLookupSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/actions/public/call.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/ccip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/localBatchGatewayRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/stringify.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address'
        },
        {
            name: 'urls',
            type: 'string[]'
        },
        {
            name: 'callData',
            type: 'bytes'
        },
        {
            name: 'callbackFunction',
            type: 'bytes4'
        },
        {
            name: 'extraData',
            type: 'bytes'
        }
    ]
};
async function offchainLookup(client, { blockNumber, blockTag, data, to }) {
    const { args } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
        data,
        abi: [
            offchainLookupAbiItem
        ]
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function' ? ccipRead.request : ccipRequest;
    try {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])(to, sender)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OffchainLookupSenderMismatchError"]({
            sender,
            to
        });
        const result = urls.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localBatchGatewayUrl"]) ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$ens$2f$localBatchGatewayRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localBatchGatewayRequest"])({
            data: callData,
            ccipRequest: ccipRequest_
        }) : await ccipRequest_({
            data: callData,
            sender,
            urls
        });
        const { data: data_ } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["call"])(client, {
            blockNumber,
            blockTag,
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
                callbackSelector,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
                    {
                        type: 'bytes'
                    },
                    {
                        type: 'bytes'
                    }
                ], [
                    result,
                    extraData
                ])
            ]),
            to
        });
        return data_;
    } catch (err) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OffchainLookupError"]({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls
        });
    }
}
async function ccipRequest({ data, sender, urls }) {
    let error = new Error('An unknown error occurred.');
    for(let i = 0; i < urls.length; i++){
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? {
            data,
            sender
        } : undefined;
        const headers = method === 'POST' ? {
            'Content-Type': 'application/json'
        } : {};
        try {
            const response = await fetch(url.replace('{sender}', sender.toLowerCase()).replace('{data}', data), {
                body: JSON.stringify(body),
                headers,
                method
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            } else {
                result = await response.text();
            }
            if (!response.ok) {
                error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                    body,
                    details: result?.error ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(result.error) : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url
                });
                continue;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(result)) {
                error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ccip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OffchainLookupResponseMalformedError"]({
                    result,
                    url
                });
                continue;
            }
            return result;
        } catch (err) {
            error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpRequestError"]({
                body,
                details: err.message,
                url
            });
        }
    }
    throw error;
} //# sourceMappingURL=ccip.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/chain/extractChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "extractChain": ()=>extractChain
});
function extractChain({ chains, id }) {
    return chains.find((chain)=>chain.id === id);
} //# sourceMappingURL=extractChain.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromRlp.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fromRlp": ()=>fromRlp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/encoding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
;
function fromRlp(value, to = 'hex') {
    const bytes = (()=>{
        if (typeof value === 'string') {
            if (value.length > 3 && value.length % 2 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$encoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidHexValueError"](value);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(value);
        }
        return value;
    })();
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCursor"])(bytes, {
        recursiveReadLimit: Number.POSITIVE_INFINITY
    });
    const result = fromRlpCursor(cursor, to);
    return result;
}
function fromRlpCursor(cursor, to = 'hex') {
    if (cursor.bytes.length === 0) return to === 'hex' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(cursor.bytes) : cursor.bytes;
    const prefix = cursor.readByte();
    if (prefix < 0x80) cursor.decrementPosition(1);
    // bytes
    if (prefix < 0xc0) {
        const length = readLength(cursor, prefix, 0x80);
        const bytes = cursor.readBytes(length);
        return to === 'hex' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes) : bytes;
    }
    // list
    const length = readLength(cursor, prefix, 0xc0);
    return readList(cursor, length, to);
}
function readLength(cursor, prefix, offset) {
    if (offset === 0x80 && prefix < 0x80) return 1;
    if (prefix <= offset + 55) return prefix - offset;
    if (prefix === offset + 55 + 1) return cursor.readUint8();
    if (prefix === offset + 55 + 2) return cursor.readUint16();
    if (prefix === offset + 55 + 3) return cursor.readUint24();
    if (prefix === offset + 55 + 4) return cursor.readUint32();
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('Invalid RLP prefix');
}
function readList(cursor, length, to) {
    const position = cursor.position;
    const value = [];
    while(cursor.position - position < length)value.push(fromRlpCursor(cursor, to));
    return value;
} //# sourceMappingURL=fromRlp.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/ens/toCoinType.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toCoinType": ()=>toCoinType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/ens.js [app-ssr] (ecmascript)");
;
const SLIP44_MSB = 0x80000000;
function toCoinType(chainId) {
    if (chainId === 1) return 60n;
    if (chainId >= SLIP44_MSB || chainId < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$ens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnsInvalidChainIdError"]({
        chainId
    });
    return BigInt((0x80000000 | chainId) >>> 0);
} //# sourceMappingURL=toCoinType.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/isHash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isHash": ()=>isHash
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
;
;
function isHash(hash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(hash) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hash) === 32;
} //# sourceMappingURL=isHash.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/ripemd160.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ripemd160": ()=>ripemd160
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/@noble/hashes/esm/ripemd160.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
function ripemd160(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ripemd160"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value, {
        strict: false
    }) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(value) : value);
    if (to === 'bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(bytes);
} //# sourceMappingURL=ripemd160.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toSignature.js [app-ssr] (ecmascript) <export toSignature as toEventSignature>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toEventSignature": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSignature"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toSignature.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toSignatureHash.js [app-ssr] (ecmascript) <export toSignatureHash as toFunctionHash>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toFunctionHash": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignatureHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSignatureHash"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignatureHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toSignatureHash.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toSignature.js [app-ssr] (ecmascript) <export toSignature as toFunctionSignature>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "toFunctionSignature": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSignature"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$toSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/toSignature.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/kzg/defineKzg.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Defines a KZG interface.
 *
 * @example
 * ```ts
 * import * as cKzg from 'c-kzg'
 * import { defineKzg } from 'viem'
 * import { mainnetTrustedSetupPath } from 'viem/node'
 *
 * cKzg.loadTrustedSetup(mainnetTrustedSetupPath)
 *
 * const kzg = defineKzg(cKzg)
 * ```
 */ __turbopack_context__.s({
    "defineKzg": ()=>defineKzg
});
function defineKzg({ blobToKzgCommitment, computeBlobKzgProof }) {
    return {
        blobToKzgCommitment,
        computeBlobKzgProof
    };
} //# sourceMappingURL=defineKzg.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/kzg/setupKzg.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "setupKzg": ()=>setupKzg
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$kzg$2f$defineKzg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/kzg/defineKzg.js [app-ssr] (ecmascript)");
;
function setupKzg(parameters, path) {
    try {
        parameters.loadTrustedSetup(path);
    } catch (e) {
        const error = e;
        if (!error.message.includes('trusted setup is already loaded')) throw error;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$kzg$2f$defineKzg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineKzg"])(parameters);
} //# sourceMappingURL=setupKzg.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/nonceManager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createNonceManager": ()=>createNonceManager,
    "jsonRpc": ()=>jsonRpc,
    "nonceManager": ()=>nonceManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/lru.js [app-ssr] (ecmascript)");
;
;
function createNonceManager(parameters) {
    const { source } = parameters;
    const deltaMap = new Map();
    const nonceMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](8192);
    const promiseMap = new Map();
    const getKey = ({ address, chainId })=>`${address}.${chainId}`;
    return {
        async consume ({ address, chainId, client }) {
            const key = getKey({
                address,
                chainId
            });
            const promise = this.get({
                address,
                chainId,
                client
            });
            this.increment({
                address,
                chainId
            });
            const nonce = await promise;
            await source.set({
                address,
                chainId
            }, nonce);
            nonceMap.set(key, nonce);
            return nonce;
        },
        async increment ({ address, chainId }) {
            const key = getKey({
                address,
                chainId
            });
            const delta = deltaMap.get(key) ?? 0;
            deltaMap.set(key, delta + 1);
        },
        async get ({ address, chainId, client }) {
            const key = getKey({
                address,
                chainId
            });
            let promise = promiseMap.get(key);
            if (!promise) {
                promise = (async ()=>{
                    try {
                        const nonce = await source.get({
                            address,
                            chainId,
                            client
                        });
                        const previousNonce = nonceMap.get(key) ?? 0;
                        if (previousNonce > 0 && nonce <= previousNonce) return previousNonce + 1;
                        nonceMap.delete(key);
                        return nonce;
                    } finally{
                        this.reset({
                            address,
                            chainId
                        });
                    }
                })();
                promiseMap.set(key, promise);
            }
            const delta = deltaMap.get(key) ?? 0;
            return delta + await promise;
        },
        reset ({ address, chainId }) {
            const key = getKey({
                address,
                chainId
            });
            deltaMap.delete(key);
            promiseMap.delete(key);
        }
    };
}
function jsonRpc() {
    return {
        async get (parameters) {
            const { address, client } = parameters;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionCount"])(client, {
                address,
                blockTag: 'pending'
            });
        },
        set () {}
    };
}
const nonceManager = /*#__PURE__*/ createNonceManager({
    source: jsonRpc()
}); //# sourceMappingURL=nonceManager.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/compactSignatureToSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "compactSignatureToSignature": ()=>compactSignatureToSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
function compactSignatureToSignature({ r, yParityAndS }) {
    const yParityAndS_bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(yParityAndS);
    const yParity = yParityAndS_bytes[0] & 0x80 ? 1 : 0;
    const s = yParityAndS_bytes;
    if (yParity === 1) s[0] &= 0x7f;
    return {
        r,
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(s),
        yParity
    };
} //# sourceMappingURL=compactSignatureToSignature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/isErc6492Signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isErc6492Signature": ()=>isErc6492Signature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
;
;
function isErc6492Signature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceHex"])(signature, -32) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc6492MagicBytes"];
} //# sourceMappingURL=isErc6492Signature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/isErc8010Signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isErc8010Signature": ()=>isErc8010Signature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/ox/_esm/erc8010/SignatureErc8010.js [app-ssr] (ecmascript) <export * as SignatureErc8010>");
;
function isErc8010Signature(signature) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].validate(signature);
} //# sourceMappingURL=isErc8010Signature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/parseCompactSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseCompactSignature": ()=>parseCompactSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
function parseCompactSignature(signatureHex) {
    const { r, s } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secp256k1"].Signature.fromCompact(signatureHex.slice(2, 130));
    return {
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(r, {
            size: 32
        }),
        yParityAndS: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(s, {
            size: 32
        })
    };
} //# sourceMappingURL=parseCompactSignature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/parseErc6492Signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseErc6492Signature": ()=>parseErc6492Signature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$isErc6492Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/isErc6492Signature.js [app-ssr] (ecmascript)");
;
;
function parseErc6492Signature(signature) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$isErc6492Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErc6492Signature"])(signature)) return {
        signature
    };
    const [address, data, signature_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAbiParameters"])([
        {
            type: 'address'
        },
        {
            type: 'bytes'
        },
        {
            type: 'bytes'
        }
    ], signature);
    return {
        address,
        data,
        signature: signature_
    };
} //# sourceMappingURL=parseErc6492Signature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/parseErc8010Signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseErc8010Signature": ()=>parseErc8010Signature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/ox/_esm/erc8010/SignatureErc8010.js [app-ssr] (ecmascript) <export * as SignatureErc8010>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$isErc8010Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/isErc8010Signature.js [app-ssr] (ecmascript)");
;
;
;
function parseErc8010Signature(signature) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$isErc8010Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErc8010Signature"])(signature)) return {
        signature
    };
    const { authorization: authorization_ox, to, ...rest } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].unwrap(signature);
    return {
        authorization: {
            address: authorization_ox.address,
            chainId: authorization_ox.chainId,
            nonce: Number(authorization_ox.nonce),
            r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(authorization_ox.r, {
                size: 32
            }),
            s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(authorization_ox.s, {
                size: 32
            }),
            yParity: authorization_ox.yParity
        },
        ...to ? {
            address: to
        } : {},
        ...rest
    };
} //# sourceMappingURL=parseErc8010Signature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/parseSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseSignature": ()=>parseSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
function parseSignature(signatureHex) {
    const { r, s } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secp256k1"].Signature.fromCompact(signatureHex.slice(2, 130));
    const yParityOrV = Number(`0x${signatureHex.slice(130)}`);
    const [v, yParity] = (()=>{
        if (yParityOrV === 0 || yParityOrV === 1) return [
            undefined,
            yParityOrV
        ];
        if (yParityOrV === 27) return [
            BigInt(yParityOrV),
            0
        ];
        if (yParityOrV === 28) return [
            BigInt(yParityOrV),
            1
        ];
        throw new Error('Invalid yParityOrV value');
    })();
    if (typeof v !== 'undefined') return {
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(r, {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(s, {
            size: 32
        }),
        v,
        yParity
    };
    return {
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(r, {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(s, {
            size: 32
        }),
        yParity
    };
} //# sourceMappingURL=parseSignature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverMessageAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "recoverMessageAddress": ()=>recoverMessageAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
;
;
async function recoverMessageAddress({ message, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(message),
        signature
    });
} //# sourceMappingURL=recoverMessageAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "assertTransactionEIP1559": ()=>assertTransactionEIP1559,
    "assertTransactionEIP2930": ()=>assertTransactionEIP2930,
    "assertTransactionEIP4844": ()=>assertTransactionEIP4844,
    "assertTransactionEIP7702": ()=>assertTransactionEIP7702,
    "assertTransactionLegacy": ()=>assertTransactionLegacy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$kzg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/kzg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/blob.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function assertTransactionEIP7702(transaction) {
    const { authorizationList } = transaction;
    if (authorizationList) {
        for (const authorization of authorizationList){
            const { chainId } = authorization;
            const address = authorization.address;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
                address
            });
            if (chainId < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
                chainId
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
    const { blobVersionedHashes } = transaction;
    if (blobVersionedHashes) {
        if (blobVersionedHashes.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyBlobError"]();
        for (const hash of blobVersionedHashes){
            const size_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hash);
            const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(hash, 0, 1));
            if (size_ !== 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidVersionedHashSizeError"]({
                hash,
                size: size_
            });
            if (version !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$kzg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["versionedHashVersionKzg"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidVersionedHashVersionError"]({
                hash,
                version
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
    const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (maxFeePerGas && maxFeePerGas > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}
function assertTransactionEIP2930(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.');
    if (gasPrice && gasPrice > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: gasPrice
    });
}
function assertTransactionLegacy(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (typeof chainId !== 'undefined' && chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.');
    if (gasPrice && gasPrice > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: gasPrice
    });
} //# sourceMappingURL=assertTransaction.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getSerializedTransactionType": ()=>getSerializedTransactionType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
;
;
function getSerializedTransactionType(serializedTransaction) {
    const serializedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceHex"])(serializedTransaction, 0, 1);
    if (serializedType === '0x04') return 'eip7702';
    if (serializedType === '0x03') return 'eip4844';
    if (serializedType === '0x02') return 'eip1559';
    if (serializedType === '0x01') return 'eip2930';
    if (serializedType !== '0x' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(serializedType) >= 0xc0) return 'legacy';
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionTypeError"]({
        serializedType
    });
} //# sourceMappingURL=getSerializedTransactionType.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseAccessList": ()=>parseAccessList,
    "parseTransaction": ()=>parseTransaction,
    "toTransactionArray": ()=>toTransactionArray
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$isHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/isHash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getSerializedTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/getSerializedTransactionType.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function parseTransaction(serializedTransaction) {
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getSerializedTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSerializedTransactionType"])(serializedTransaction);
    if (type === 'eip1559') return parseTransactionEIP1559(serializedTransaction);
    if (type === 'eip2930') return parseTransactionEIP2930(serializedTransaction);
    if (type === 'eip4844') return parseTransactionEIP4844(serializedTransaction);
    if (type === 'eip7702') return parseTransactionEIP7702(serializedTransaction);
    return parseTransactionLegacy(serializedTransaction);
}
function parseTransactionEIP7702(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, authorizationList, v, r, s] = transactionArray;
    if (transactionArray.length !== 10 && transactionArray.length !== 13) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            authorizationList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip7702'
    });
    const transaction = {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip7702'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (authorizationList.length !== 0 && authorizationList !== '0x') transaction.authorizationList = parseAuthorizationList(authorizationList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP7702"])(transaction);
    const signature = transactionArray.length === 13 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP4844(serializedTransaction) {
    const transactionOrWrapperArray = toTransactionArray(serializedTransaction);
    const hasNetworkWrapper = transactionOrWrapperArray.length === 4;
    const transactionArray = hasNetworkWrapper ? transactionOrWrapperArray[0] : transactionOrWrapperArray;
    const wrapperArray = hasNetworkWrapper ? transactionOrWrapperArray.slice(1) : [];
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, maxFeePerBlobGas, blobVersionedHashes, v, r, s] = transactionArray;
    const [blobs, commitments, proofs] = wrapperArray;
    if (!(transactionArray.length === 11 || transactionArray.length === 14)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip4844'
    });
    const transaction = {
        blobVersionedHashes: blobVersionedHashes,
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip4844'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerBlobGas) && maxFeePerBlobGas !== '0x') transaction.maxFeePerBlobGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerBlobGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    if (blobs && commitments && proofs) transaction.sidecars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
        blobs: blobs,
        commitments: commitments,
        proofs: proofs
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP4844"])(transaction);
    const signature = transactionArray.length === 14 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP1559(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 9 || transactionArray.length === 12)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 9 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip1559'
    });
    const transaction = {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip1559'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxFeePerGas) && maxFeePerGas !== '0x') transaction.maxFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxFeePerGas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(maxPriorityFeePerGas) && maxPriorityFeePerGas !== '0x') transaction.maxPriorityFeePerGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(maxPriorityFeePerGas);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP1559"])(transaction);
    const signature = transactionArray.length === 12 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionEIP2930(serializedTransaction) {
    const transactionArray = toTransactionArray(serializedTransaction);
    const [chainId, nonce, gasPrice, gas, to, value, data, accessList, v, r, s] = transactionArray;
    if (!(transactionArray.length === 8 || transactionArray.length === 11)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            chainId,
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            accessList,
            ...transactionArray.length > 8 ? {
                v,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'eip2930'
    });
    const transaction = {
        chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
        type: 'eip2930'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gasPrice);
    if (accessList.length !== 0 && accessList !== '0x') transaction.accessList = parseAccessList(accessList);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP2930"])(transaction);
    const signature = transactionArray.length === 11 ? parseEIP155Signature(transactionArray) : undefined;
    return {
        ...signature,
        ...transaction
    };
}
function parseTransactionLegacy(serializedTransaction) {
    const transactionArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromRlp"])(serializedTransaction, 'hex');
    const [nonce, gasPrice, gas, to, value, data, chainIdOrV_, r, s] = transactionArray;
    if (!(transactionArray.length === 6 || transactionArray.length === 9)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSerializedTransactionError"]({
        attributes: {
            nonce,
            gasPrice,
            gas,
            to,
            value,
            data,
            ...transactionArray.length > 6 ? {
                v: chainIdOrV_,
                r,
                s
            } : {}
        },
        serializedTransaction,
        type: 'legacy'
    });
    const transaction = {
        type: 'legacy'
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(to) && to !== '0x') transaction.to = to;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gas) && gas !== '0x') transaction.gas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gas);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(data) && data !== '0x') transaction.data = data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(nonce)) transaction.nonce = nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(value) && value !== '0x') transaction.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(gasPrice) && gasPrice !== '0x') transaction.gasPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(gasPrice);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionLegacy"])(transaction);
    if (transactionArray.length === 6) return transaction;
    const chainIdOrV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(chainIdOrV_) && chainIdOrV_ !== '0x' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(chainIdOrV_) : 0n;
    if (s === '0x' && r === '0x') {
        if (chainIdOrV > 0) transaction.chainId = Number(chainIdOrV);
        return transaction;
    }
    const v = chainIdOrV;
    const chainId = Number((v - 35n) / 2n);
    if (chainId > 0) transaction.chainId = chainId;
    else if (v !== 27n && v !== 28n) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidLegacyVError"]({
        v
    });
    transaction.v = v;
    transaction.s = s;
    transaction.r = r;
    transaction.yParity = v % 2n === 0n ? 1 : 0;
    return transaction;
}
function toTransactionArray(serializedTransaction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromRlp"])(`0x${serializedTransaction.slice(4)}`, 'hex');
}
function parseAccessList(accessList_) {
    const accessList = [];
    for(let i = 0; i < accessList_.length; i++){
        const [address, storageKeys] = accessList_[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address, {
            strict: false
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address
        });
        accessList.push({
            address: address,
            storageKeys: storageKeys.map((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$isHash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHash"])(key) ? key : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(key))
        });
    }
    return accessList;
}
function parseAuthorizationList(serializedAuthorizationList) {
    const authorizationList = [];
    for(let i = 0; i < serializedAuthorizationList.length; i++){
        const [chainId, address, nonce, yParity, r, s] = serializedAuthorizationList[i];
        authorizationList.push({
            address,
            chainId: chainId === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
            nonce: nonce === '0x' ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(nonce),
            ...parseEIP155Signature([
                yParity,
                r,
                s
            ])
        });
    }
    return authorizationList;
}
function parseEIP155Signature(transactionArray) {
    const signature = transactionArray.slice(-3);
    const v = signature[0] === '0x' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(signature[0]) === 0n ? 27n : 28n;
    return {
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padHex"])(signature[1], {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padHex"])(signature[2], {
            size: 32
        }),
        v,
        yParity: v === 27n ? 0 : 1
    };
} //# sourceMappingURL=parseTransaction.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeAuthorizationList": ()=>serializeAuthorizationList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
;
;
function serializeAuthorizationList(authorizationList) {
    if (!authorizationList || authorizationList.length === 0) return [];
    const serializedAuthorizationList = [];
    for (const authorization of authorizationList){
        const { chainId, nonce, ...signature } = authorization;
        const contractAddress = authorization.address;
        serializedAuthorizationList.push([
            chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId) : '0x',
            contractAddress,
            nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toYParitySignatureArray"])({}, signature)
        ]);
    }
    return serializedAuthorizationList;
} //# sourceMappingURL=serializeAuthorizationList.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeAccessList": ()=>serializeAccessList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
;
;
;
function serializeAccessList(accessList) {
    if (!accessList || accessList.length === 0) return [];
    const serializedAccessList = [];
    for(let i = 0; i < accessList.length; i++){
        const { address, storageKeys } = accessList[i];
        for(let j = 0; j < storageKeys.length; j++){
            if (storageKeys[j].length - 2 !== 64) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStorageKeySizeError"]({
                    storageKey: storageKeys[j]
                });
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address, {
            strict: false
        })) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
                address
            });
        }
        serializedAccessList.push([
            address,
            storageKeys
        ]);
    }
    return serializedAccessList;
} //# sourceMappingURL=serializeAccessList.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeTransaction": ()=>serializeTransaction,
    "toYParitySignatureArray": ()=>toYParitySignatureArray
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$serializeAuthorizationList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/blobsToCommitments.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/blobsToProofs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionType"])(transaction);
    if (type === 'eip1559') return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930') return serializeTransactionEIP2930(transaction, signature);
    if (type === 'eip4844') return serializeTransactionEIP4844(transaction, signature);
    if (type === 'eip7702') return serializeTransactionEIP7702(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
    const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP7702"])(transaction);
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedAuthorizationList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$serializeAuthorizationList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAuthorizationList"])(authorizationList);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x04',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
            nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce) : '0x',
            maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxPriorityFeePerGas) : '0x',
            maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxFeePerGas) : '0x',
            gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gas) : '0x',
            to ?? '0x',
            value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value) : '0x',
            data ?? '0x',
            serializedAccessList,
            serializedAuthorizationList,
            ...toYParitySignatureArray(transaction, signature)
        ])
    ]);
}
function serializeTransactionEIP4844(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP4844"])(transaction);
    let blobVersionedHashes = transaction.blobVersionedHashes;
    let sidecars = transaction.sidecars;
    // If `blobs` are passed, we will need to compute the KZG commitments & proofs.
    if (transaction.blobs && (typeof blobVersionedHashes === 'undefined' || typeof sidecars === 'undefined')) {
        const blobs = typeof transaction.blobs[0] === 'string' ? transaction.blobs : transaction.blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(x));
        const kzg = transaction.kzg;
        const commitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
            blobs,
            kzg
        });
        if (typeof blobVersionedHashes === 'undefined') blobVersionedHashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitmentsToVersionedHashes"])({
            commitments
        });
        if (typeof sidecars === 'undefined') {
            const proofs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blobsToProofs"])({
                blobs,
                commitments,
                kzg
            });
            sidecars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
                blobs,
                commitments,
                proofs
            });
        }
    }
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        maxFeePerBlobGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxFeePerBlobGas) : '0x',
        blobVersionedHashes ?? [],
        ...toYParitySignatureArray(transaction, signature)
    ];
    const blobs = [];
    const commitments = [];
    const proofs = [];
    if (sidecars) for(let i = 0; i < sidecars.length; i++){
        const { blob, commitment, proof } = sidecars[i];
        blobs.push(blob);
        commitments.push(commitment);
        proofs.push(proof);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x03',
        sidecars ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])([
            serializedTransaction,
            blobs,
            commitments,
            proofs
        ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP1559"])(transaction);
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x02',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP2930"])(transaction);
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce) : '0x',
        gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gasPrice) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x01',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionLegacy"])(transaction);
    let serializedTransaction = [
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(nonce) : '0x',
        gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gasPrice) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(value) : '0x',
        data ?? '0x'
    ];
    if (signature) {
        const v = (()=>{
            // EIP-155 (inferred chainId)
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0) return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            // EIP-155 (explicit chainId)
            if (chainId > 0) return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            // Pre-EIP-155 (no chainId)
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidLegacyVError"]({
                v: signature.v
            });
            return v;
        })();
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.r);
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.s);
        serializedTransaction = [
            ...serializedTransaction,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(v),
            r === '0x00' ? '0x' : r,
            s === '0x00' ? '0x' : s
        ];
    } else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
            '0x',
            '0x'
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
    const signature = signature_ ?? transaction;
    const { v, yParity } = signature;
    if (typeof signature.r === 'undefined') return [];
    if (typeof signature.s === 'undefined') return [];
    if (typeof v === 'undefined' && typeof yParity === 'undefined') return [];
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.r);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.s);
    const yParity_ = (()=>{
        if (typeof yParity === 'number') return yParity ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(1) : '0x';
        if (v === 0n) return '0x';
        if (v === 1n) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(1);
        return v === 27n ? '0x' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(1);
    })();
    return [
        yParity_,
        r === '0x00' ? '0x' : r,
        s === '0x00' ? '0x' : s
    ];
} //# sourceMappingURL=serializeTransaction.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverTransactionAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "recoverTransactionAddress": ()=>recoverTransactionAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$parseTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/parseTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
;
;
;
;
async function recoverTransactionAddress(parameters) {
    const { serializedTransaction, signature: signature_ } = parameters;
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$parseTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTransaction"])(serializedTransaction);
    const signature = signature_ ?? {
        r: transaction.r,
        s: transaction.s,
        v: transaction.v,
        yParity: transaction.yParity
    };
    const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])({
        ...transaction,
        r: undefined,
        s: undefined,
        v: undefined,
        yParity: undefined,
        sidecars: undefined
    });
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(serialized),
        signature
    });
} //# sourceMappingURL=recoverTransactionAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverTypedDataAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "recoverTypedDataAddress": ()=>recoverTypedDataAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
;
;
async function recoverTypedDataAddress(parameters) {
    const { domain, message, primaryType, signature, types } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashTypedData"])({
            domain,
            message,
            primaryType,
            types
        }),
        signature
    });
} //# sourceMappingURL=recoverTypedDataAddress.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/serializeCompactSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeCompactSignature": ()=>serializeCompactSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
;
;
function serializeCompactSignature({ r, yParityAndS }) {
    return `0x${new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secp256k1"].Signature((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(yParityAndS)).toCompactHex()}`;
} //# sourceMappingURL=serializeCompactSignature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/serializeErc6492Signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeErc6492Signature": ()=>serializeErc6492Signature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
;
;
;
;
function serializeErc6492Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
            {
                type: 'address'
            },
            {
                type: 'bytes'
            },
            {
                type: 'bytes'
            }
        ], [
            address,
            data,
            signature
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc6492MagicBytes"]
    ]);
    if (to === 'hex') return signature_;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(signature_);
} //# sourceMappingURL=serializeErc6492Signature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/serializeErc8010Signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeErc8010Signature": ()=>serializeErc8010Signature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/node_modules/ox/_esm/erc8010/SignatureErc8010.js [app-ssr] (ecmascript) <export * as SignatureErc8010>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
;
;
function serializeErc8010Signature(parameters) {
    const { address, data, signature, to = 'hex' } = parameters;
    const signature_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].wrap({
        authorization: {
            address: parameters.authorization.address,
            chainId: parameters.authorization.chainId,
            nonce: BigInt(parameters.authorization.nonce),
            r: BigInt(parameters.authorization.r),
            s: BigInt(parameters.authorization.s),
            yParity: parameters.authorization.yParity
        },
        data,
        signature,
        to: address
    });
    if (to === 'hex') return signature_;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(signature_);
} //# sourceMappingURL=serializeErc8010Signature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/signatureToCompactSignature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "signatureToCompactSignature": ()=>signatureToCompactSignature
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
function signatureToCompactSignature(signature) {
    const { r, s, v, yParity } = signature;
    const yParity_ = Number(yParity ?? v - 27n);
    let yParityAndS = s;
    if (yParity_ === 1) {
        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(s);
        bytes[0] |= 0x80;
        yParityAndS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(bytes);
    }
    return {
        r,
        yParityAndS
    };
} //# sourceMappingURL=signatureToCompactSignature.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/verifyHash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "verifyHash": ()=>verifyHash
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
;
;
;
async function verifyHash({ address, hash, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"])({
        hash,
        signature
    }));
} //# sourceMappingURL=verifyHash.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/verifyMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "verifyMessage": ()=>verifyMessage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverMessageAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverMessageAddress.js [app-ssr] (ecmascript)");
;
;
;
async function verifyMessage({ address, message, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverMessageAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverMessageAddress"])({
        message,
        signature
    }));
} //# sourceMappingURL=verifyMessage.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/verifyTypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "verifyTypedData": ()=>verifyTypedData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverTypedDataAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/signature/recoverTypedDataAddress.js [app-ssr] (ecmascript)");
;
;
;
async function verifyTypedData(parameters) {
    const { address, domain, message, primaryType, signature, types } = parameters;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverTypedDataAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverTypedDataAddress"])({
        domain,
        message,
        primaryType,
        signature,
        types
    }));
} //# sourceMappingURL=verifyTypedData.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseUnits": ()=>parseUnits
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/errors/unit.js [app-ssr] (ecmascript)");
;
function parseUnits(value, decimals) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidDecimalNumberError"]({
        value
    });
    let [integer, fraction = '0'] = value.split('.');
    const negative = integer.startsWith('-');
    if (negative) integer = integer.slice(1);
    // trim trailing zeros.
    fraction = fraction.replace(/(0+)$/, '');
    // round off if the fraction is larger than the number of decimals.
    if (decimals === 0) {
        if (Math.round(Number(`.${fraction}`)) === 1) integer = `${BigInt(integer) + 1n}`;
        fraction = '';
    } else if (fraction.length > decimals) {
        const [left, unit, right] = [
            fraction.slice(0, decimals - 1),
            fraction.slice(decimals - 1, decimals),
            fraction.slice(decimals)
        ];
        const rounded = Math.round(Number(`${unit}.${right}`));
        if (rounded > 9) fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, '0');
        else fraction = `${left}${rounded}`;
        if (fraction.length > decimals) {
            fraction = fraction.slice(1);
            integer = `${BigInt(integer) + 1n}`;
        }
        fraction = fraction.slice(0, decimals);
    } else {
        fraction = fraction.padEnd(decimals, '0');
    }
    return BigInt(`${negative ? '-' : ''}${integer}${fraction}`);
} //# sourceMappingURL=parseUnits.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseEther": ()=>parseEther
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/unit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
;
;
function parseEther(ether, unit = 'wei') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(ether, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["etherUnits"][unit]);
} //# sourceMappingURL=parseEther.js.map
}),
"[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/parseGwei.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseGwei": ()=>parseGwei
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/constants/unit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
;
;
function parseGwei(ether, unit = 'wei') {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(ether, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$unit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gweiUnits"][unit]);
} //# sourceMappingURL=parseGwei.js.map
}),

};

//# sourceMappingURL=0f858_viem__esm_utils_30ba8ef5._.js.map