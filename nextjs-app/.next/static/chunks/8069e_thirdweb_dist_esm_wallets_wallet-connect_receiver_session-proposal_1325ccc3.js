(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-proposal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "acceptSessionProposal": ()=>acceptSessionProposal,
    "disconnectExistingSessions": ()=>disconnectExistingSessions,
    "onSessionProposal": ()=>onSessionProposal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-store.js [app-client] (ecmascript)");
;
;
async function onSessionProposal(options) {
    var _event_verifyContext_verified, _event_verifyContext;
    const { wallet, walletConnectClient, event, chains, onConnect } = options;
    const account = wallet.getAccount();
    if (!account) {
        throw new Error("No account connected to provided wallet");
    }
    const origin = (_event_verifyContext = event.verifyContext) === null || _event_verifyContext === void 0 ? void 0 : (_event_verifyContext_verified = _event_verifyContext.verified) === null || _event_verifyContext_verified === void 0 ? void 0 : _event_verifyContext_verified.origin;
    if (origin) {
        await disconnectExistingSessions({
            origin,
            walletConnectClient
        });
    }
    const session = await acceptSessionProposal({
        account,
        chains,
        sessionProposal: event,
        walletConnectClient
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"])(session);
    wallet.subscribe("disconnect", ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectWalletConnectSession"])({
            session,
            walletConnectClient
        });
    });
    onConnect === null || onConnect === void 0 ? void 0 : onConnect(session);
}
async function disconnectExistingSessions(param) {
    let { walletConnectClient, origin } = param;
    const sessions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessions"])();
    for (const session of sessions){
        if (session.origin === origin) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectWalletConnectSession"])({
                session,
                walletConnectClient
            });
        }
    }
}
async function acceptSessionProposal(param) {
    let { account, walletConnectClient, sessionProposal, chains } = param;
    var _sessionProposal_params_requiredNamespaces, _sessionProposal_params_optionalNamespaces, _sessionProposal_params_requiredNamespaces_eip155_chains, _sessionProposal_params_requiredNamespaces_eip155, _sessionProposal_params_requiredNamespaces1, _sessionProposal_params_optionalNamespaces_eip155_chains, _sessionProposal_params_optionalNamespaces_eip155, _sessionProposal_params_optionalNamespaces1, _sessionProposal_params_requiredNamespaces_eip1551, _sessionProposal_params_requiredNamespaces2, _sessionProposal_params_optionalNamespaces_eip1551, _sessionProposal_params_optionalNamespaces2, _sessionProposal_params_requiredNamespaces_eip1552, _sessionProposal_params_requiredNamespaces3, _sessionProposal_params_optionalNamespaces_eip1552, _sessionProposal_params_optionalNamespaces3, _sessionProposal_verifyContext_verified, _sessionProposal_verifyContext;
    if (!((_sessionProposal_params_requiredNamespaces = sessionProposal.params.requiredNamespaces) === null || _sessionProposal_params_requiredNamespaces === void 0 ? void 0 : _sessionProposal_params_requiredNamespaces.eip155) && !((_sessionProposal_params_optionalNamespaces = sessionProposal.params.optionalNamespaces) === null || _sessionProposal_params_optionalNamespaces === void 0 ? void 0 : _sessionProposal_params_optionalNamespaces.eip155)) {
        throw new Error("No EIP155 namespace found in Wallet Connect session proposal");
    }
    var _sessionProposal_params_requiredNamespaces_eip155_chains_map, _sessionProposal_params_optionalNamespaces_eip155_chains_map, _chains_map, _sessionProposal_params_requiredNamespaces_eip155_events, _sessionProposal_params_optionalNamespaces_eip155_events, _sessionProposal_params_requiredNamespaces_eip155_methods, _sessionProposal_params_optionalNamespaces_eip155_methods;
    const namespaces = {
        chains: [
            ...Array.from(new Set([
                ...(_sessionProposal_params_requiredNamespaces_eip155_chains_map = (_sessionProposal_params_requiredNamespaces1 = sessionProposal.params.requiredNamespaces) === null || _sessionProposal_params_requiredNamespaces1 === void 0 ? void 0 : (_sessionProposal_params_requiredNamespaces_eip155 = _sessionProposal_params_requiredNamespaces1.eip155) === null || _sessionProposal_params_requiredNamespaces_eip155 === void 0 ? void 0 : (_sessionProposal_params_requiredNamespaces_eip155_chains = _sessionProposal_params_requiredNamespaces_eip155.chains) === null || _sessionProposal_params_requiredNamespaces_eip155_chains === void 0 ? void 0 : _sessionProposal_params_requiredNamespaces_eip155_chains.map((chain)=>"".concat(chain, ":").concat(account.address))) !== null && _sessionProposal_params_requiredNamespaces_eip155_chains_map !== void 0 ? _sessionProposal_params_requiredNamespaces_eip155_chains_map : [],
                ...(_sessionProposal_params_optionalNamespaces_eip155_chains_map = (_sessionProposal_params_optionalNamespaces1 = sessionProposal.params.optionalNamespaces) === null || _sessionProposal_params_optionalNamespaces1 === void 0 ? void 0 : (_sessionProposal_params_optionalNamespaces_eip155 = _sessionProposal_params_optionalNamespaces1.eip155) === null || _sessionProposal_params_optionalNamespaces_eip155 === void 0 ? void 0 : (_sessionProposal_params_optionalNamespaces_eip155_chains = _sessionProposal_params_optionalNamespaces_eip155.chains) === null || _sessionProposal_params_optionalNamespaces_eip155_chains === void 0 ? void 0 : _sessionProposal_params_optionalNamespaces_eip155_chains.map((chain)=>"".concat(chain, ":").concat(account.address))) !== null && _sessionProposal_params_optionalNamespaces_eip155_chains_map !== void 0 ? _sessionProposal_params_optionalNamespaces_eip155_chains_map : [],
                ...(_chains_map = chains === null || chains === void 0 ? void 0 : chains.map((chain)=>"eip155:".concat(chain.id, ":").concat(account.address))) !== null && _chains_map !== void 0 ? _chains_map : []
            ]))
        ],
        events: [
            ...(_sessionProposal_params_requiredNamespaces_eip155_events = (_sessionProposal_params_requiredNamespaces2 = sessionProposal.params.requiredNamespaces) === null || _sessionProposal_params_requiredNamespaces2 === void 0 ? void 0 : (_sessionProposal_params_requiredNamespaces_eip1551 = _sessionProposal_params_requiredNamespaces2.eip155) === null || _sessionProposal_params_requiredNamespaces_eip1551 === void 0 ? void 0 : _sessionProposal_params_requiredNamespaces_eip1551.events) !== null && _sessionProposal_params_requiredNamespaces_eip155_events !== void 0 ? _sessionProposal_params_requiredNamespaces_eip155_events : [],
            ...(_sessionProposal_params_optionalNamespaces_eip155_events = (_sessionProposal_params_optionalNamespaces2 = sessionProposal.params.optionalNamespaces) === null || _sessionProposal_params_optionalNamespaces2 === void 0 ? void 0 : (_sessionProposal_params_optionalNamespaces_eip1551 = _sessionProposal_params_optionalNamespaces2.eip155) === null || _sessionProposal_params_optionalNamespaces_eip1551 === void 0 ? void 0 : _sessionProposal_params_optionalNamespaces_eip1551.events) !== null && _sessionProposal_params_optionalNamespaces_eip155_events !== void 0 ? _sessionProposal_params_optionalNamespaces_eip155_events : []
        ],
        methods: [
            ...(_sessionProposal_params_requiredNamespaces_eip155_methods = (_sessionProposal_params_requiredNamespaces3 = sessionProposal.params.requiredNamespaces) === null || _sessionProposal_params_requiredNamespaces3 === void 0 ? void 0 : (_sessionProposal_params_requiredNamespaces_eip1552 = _sessionProposal_params_requiredNamespaces3.eip155) === null || _sessionProposal_params_requiredNamespaces_eip1552 === void 0 ? void 0 : _sessionProposal_params_requiredNamespaces_eip1552.methods) !== null && _sessionProposal_params_requiredNamespaces_eip155_methods !== void 0 ? _sessionProposal_params_requiredNamespaces_eip155_methods : [],
            ...(_sessionProposal_params_optionalNamespaces_eip155_methods = (_sessionProposal_params_optionalNamespaces3 = sessionProposal.params.optionalNamespaces) === null || _sessionProposal_params_optionalNamespaces3 === void 0 ? void 0 : (_sessionProposal_params_optionalNamespaces_eip1552 = _sessionProposal_params_optionalNamespaces3.eip155) === null || _sessionProposal_params_optionalNamespaces_eip1552 === void 0 ? void 0 : _sessionProposal_params_optionalNamespaces_eip1552.methods) !== null && _sessionProposal_params_optionalNamespaces_eip155_methods !== void 0 ? _sessionProposal_params_optionalNamespaces_eip155_methods : []
        ]
    };
    const approval = await walletConnectClient.approve({
        id: sessionProposal.id,
        namespaces: {
            eip155: {
                accounts: namespaces.chains,
                events: namespaces.events,
                methods: namespaces.methods
            }
        }
    });
    const session = await approval.acknowledged();
    return {
        origin: ((_sessionProposal_verifyContext = sessionProposal.verifyContext) === null || _sessionProposal_verifyContext === void 0 ? void 0 : (_sessionProposal_verifyContext_verified = _sessionProposal_verifyContext.verified) === null || _sessionProposal_verifyContext_verified === void 0 ? void 0 : _sessionProposal_verifyContext_verified.origin) || "Unknown origin",
        topic: session.topic
    };
} //# sourceMappingURL=session-proposal.js.map
}),
}]);

//# sourceMappingURL=8069e_thirdweb_dist_esm_wallets_wallet-connect_receiver_session-proposal_1325ccc3.js.map