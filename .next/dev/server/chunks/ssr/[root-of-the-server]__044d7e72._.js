module.exports = [
"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Boom/LIS-Project/LIS-Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const dynamic = "force-dynamic";
async function getReports() {
    try {
        const res = await fetch("https://lisapi.entrywisesolutions.com/api/v1/lab-reports", {
            cache: "no-store"
        });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Invalid response shape");
        return data;
    } catch (e) {
        return [];
    }
}
async function DashboardPage() {
    const reports = await getReports();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                children: [
                    {
                        label: "Total Patients",
                        value: "12,480",
                        delta: "+2.1%"
                    },
                    {
                        label: "Pending Orders",
                        value: "324",
                        delta: "-0.8%"
                    },
                    {
                        label: "Critical Results",
                        value: "18",
                        delta: "+0.3%"
                    },
                    {
                        label: "Avg. TAT",
                        value: "6.2h",
                        delta: "-5.4%"
                    }
                ].map((kpi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-zinc-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500 dark:text-zinc-400",
                                children: kpi.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-baseline justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-semibold tracking-tight",
                                        children: kpi.value
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-emerald-600 dark:text-emerald-400",
                                        children: kpi.delta
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, kpi.label, true, {
                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-4 lg:grid-cols-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-zinc-200 p-4 text-sm font-medium dark:border-white/10",
                            children: "Recent Reports"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-full text-left text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-zinc-50 text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "report_id"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "patient_id"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "alias_patient"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "filler_order"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "service_id"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "service_text"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3 font-medium",
                                                    children: "received_at"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: reports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-4 py-6 text-center text-zinc-500",
                                                colSpan: 7,
                                                children: "No reports found."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this) : reports.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-zinc-200 hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-800/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 font-medium",
                                                        children: r.report_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 text-zinc-500",
                                                        children: r.patient_id || "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: r.alias_patient
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: r.filler_order
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: r.service_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3",
                                                        children: r.service_text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Boom$2f$LIS$2d$Project$2f$LIS$2d$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-3 whitespace-nowrap text-zinc-500",
                                                        children: r.received_at
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, r.report_id, true, {
                                                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Boom/LIS-Project/LIS-Frontend/app/dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__044d7e72._.js.map