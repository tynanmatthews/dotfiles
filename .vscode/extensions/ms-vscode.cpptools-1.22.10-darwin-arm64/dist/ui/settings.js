'use strict';
const elementId = {
    configName: "configName",
    configNameInvalid: "configNameInvalid",
    configSelection: "configSelection",
    addConfigDiv: "addConfigDiv",
    addConfigBtn: "addConfigBtn",
    addConfigInputDiv: "addConfigInputDiv",
    addConfigOk: "addConfigOk",
    addConfigCancel: "addConfigCancel",
    addConfigName: "addConfigName",
    compilerPath: "compilerPath",
    compilerPathInvalid: "compilerPathInvalid",
    knownCompilers: "knownCompilers",
    noCompilerPathsDetected: "noCompilerPathsDetected",
    compilerArgs: "compilerArgs",
    intelliSenseMode: "intelliSenseMode",
    intelliSenseModeInvalid: "intelliSenseModeInvalid",
    includePath: "includePath",
    includePathInvalid: "includePathInvalid",
    defines: "defines",
    cStandard: "cStandard",
    cppStandard: "cppStandard",
    windowsSdkVersion: "windowsSdkVersion",
    macFrameworkPath: "macFrameworkPath",
    macFrameworkPathInvalid: "macFrameworkPathInvalid",
    compileCommands: "compileCommands",
    compileCommandsInvalid: "compileCommandsInvalid",
    configurationProvider: "configurationProvider",
    forcedInclude: "forcedInclude",
    forcedIncludeInvalid: "forcedIncludeInvalid",
    mergeConfigurations: "mergeConfigurations",
    dotConfig: "dotConfig",
    dotConfigInvalid: "dotConfigInvalid",
    browsePath: "browsePath",
    browsePathInvalid: "browsePathInvalid",
    limitSymbolsToIncludedHeaders: "limitSymbolsToIncludedHeaders",
    databaseFilename: "databaseFilename",
    databaseFilenameInvalid: "databaseFilenameInvalid",
    showAdvanced: "showAdvanced",
    advancedSection: "advancedSection"
};
class SettingsApp {
    vsCodeApi;
    updating = false;
    constructor() {
        this.vsCodeApi = acquireVsCodeApi();
        window.addEventListener("keydown", this.onTabKeyDown.bind(this));
        window.addEventListener("message", this.onMessageReceived.bind(this));
        this.addEventsToConfigNameChanges();
        this.addEventsToInputValues();
        document.getElementById(elementId.knownCompilers)?.addEventListener("change", this.onKnownCompilerSelect.bind(this));
        const oldState = this.vsCodeApi.getState();
        const advancedShown = oldState && oldState.advancedShown;
        const advancedSection = document.getElementById(elementId.advancedSection);
        if (advancedSection) {
            advancedSection.style.display = advancedShown ? "block" : "none";
        }
        document.getElementById(elementId.showAdvanced)?.classList.toggle(advancedShown ? "collapse" : "expand", true);
        document.getElementById(elementId.showAdvanced)?.addEventListener("click", this.onShowAdvanced.bind(this));
        this.vsCodeApi.postMessage({
            command: "initialized"
        });
    }
    addEventsToInputValues() {
        const elements = document.getElementsByName("inputValue");
        elements.forEach(el => {
            el.addEventListener("change", this.onChanged.bind(this, el.id));
        });
        document.getElementById(elementId.limitSymbolsToIncludedHeaders)?.addEventListener("change", this.onChangedCheckbox.bind(this, elementId.limitSymbolsToIncludedHeaders));
        document.getElementById(elementId.mergeConfigurations)?.addEventListener("change", this.onChangedCheckbox.bind(this, elementId.mergeConfigurations));
    }
    addEventsToConfigNameChanges() {
        document.getElementById(elementId.configName)?.addEventListener("change", this.onConfigNameChanged.bind(this));
        document.getElementById(elementId.configSelection)?.addEventListener("change", this.onConfigSelect.bind(this));
        document.getElementById(elementId.addConfigBtn)?.addEventListener("click", this.onAddConfigBtn.bind(this));
        document.getElementById(elementId.addConfigOk)?.addEventListener("click", this.onAddConfigConfirm.bind(this, true));
        document.getElementById(elementId.addConfigCancel)?.addEventListener("click", this.onAddConfigConfirm.bind(this, false));
    }
    onTabKeyDown(e) {
        if (e.keyCode === 9) {
            document.body.classList.add("tabbing");
            window.removeEventListener("keydown", this.onTabKeyDown);
            window.addEventListener("mousedown", this.onMouseDown.bind(this));
        }
    }
    onMouseDown() {
        document.body.classList.remove("tabbing");
        window.removeEventListener("mousedown", this.onMouseDown);
        window.addEventListener("keydown", this.onTabKeyDown.bind(this));
    }
    onShowAdvanced() {
        const isShown = document.getElementById(elementId.advancedSection).style.display === "block";
        document.getElementById(elementId.advancedSection).style.display = isShown ? "none" : "block";
        this.vsCodeApi.setState({ advancedShown: !isShown });
        const element = document.getElementById(elementId.showAdvanced);
        element.classList.toggle("collapse");
        element.classList.toggle("expand");
    }
    onAddConfigBtn() {
        this.showElement(elementId.addConfigDiv, false);
        this.showElement(elementId.addConfigInputDiv, true);
    }
    onAddConfigConfirm(request) {
        this.showElement(elementId.addConfigInputDiv, false);
        this.showElement(elementId.addConfigDiv, true);
        if (request) {
            const el = document.getElementById(elementId.addConfigName);
            if (el.value !== undefined && el.value !== "") {
                this.vsCodeApi.postMessage({
                    command: "addConfig",
                    name: el.value
                });
                el.value = "";
            }
        }
    }
    onConfigNameChanged() {
        if (this.updating) {
            return;
        }
        const configName = document.getElementById(elementId.configName);
        const list = document.getElementById(elementId.configSelection);
        if (configName.value === "") {
            document.getElementById(elementId.configName).value = list.options[list.selectedIndex].value;
            return;
        }
        list.options[list.selectedIndex].value = configName.value;
        list.options[list.selectedIndex].text = configName.value;
        this.onChanged(elementId.configName);
    }
    onConfigSelect() {
        if (this.updating) {
            return;
        }
        const el = document.getElementById(elementId.configSelection);
        document.getElementById(elementId.configName).value = el.value;
        this.vsCodeApi.postMessage({
            command: "configSelect",
            index: el.selectedIndex
        });
    }
    onKnownCompilerSelect() {
        if (this.updating) {
            return;
        }
        const el = document.getElementById(elementId.knownCompilers);
        document.getElementById(elementId.compilerPath).value = el.value;
        this.onChanged(elementId.compilerPath);
        this.vsCodeApi.postMessage({
            command: "knownCompilerSelect"
        });
    }
    fixKnownCompilerSelection() {
        const compilerPath = document.getElementById(elementId.compilerPath).value.toLowerCase();
        const knownCompilers = document.getElementById(elementId.knownCompilers);
        for (let n = 0; n < knownCompilers.options.length; n++) {
            if (compilerPath === knownCompilers.options[n].value.toLowerCase()) {
                knownCompilers.value = knownCompilers.options[n].value;
                return;
            }
        }
        knownCompilers.value = '';
    }
    onChangedCheckbox(id) {
        if (this.updating) {
            return;
        }
        const el = document.getElementById(id);
        this.vsCodeApi.postMessage({
            command: "change",
            key: id,
            value: el.checked
        });
    }
    onChanged(id) {
        if (this.updating) {
            return;
        }
        const el = document.getElementById(id);
        if (id === elementId.compilerPath) {
            this.fixKnownCompilerSelection();
        }
        this.vsCodeApi.postMessage({
            command: "change",
            key: id,
            value: el.value
        });
    }
    onMessageReceived(e) {
        const message = e.data;
        switch (message.command) {
            case 'updateConfig':
                this.updateConfig(message.config);
                break;
            case 'updateErrors':
                this.updateErrors(message.errors);
                break;
            case 'setKnownCompilers':
                this.setKnownCompilers(message.compilers);
                break;
            case 'updateConfigSelection':
                this.updateConfigSelection(message);
                break;
        }
    }
    updateConfig(config) {
        this.updating = true;
        try {
            const joinEntries = (input) => (input && input.length) ? input.join("\n") : "";
            document.getElementById(elementId.configName).value = config.name;
            document.getElementById(elementId.compilerPath).value = config.compilerPath ? config.compilerPath : "";
            this.fixKnownCompilerSelection();
            document.getElementById(elementId.compilerArgs).value = joinEntries(config.compilerArgs);
            document.getElementById(elementId.intelliSenseMode).value = config.intelliSenseMode ? config.intelliSenseMode : "${default}";
            document.getElementById(elementId.includePath).value = joinEntries(config.includePath);
            document.getElementById(elementId.defines).value = joinEntries(config.defines);
            document.getElementById(elementId.cStandard).value = config.cStandard;
            document.getElementById(elementId.cppStandard).value = config.cppStandard;
            document.getElementById(elementId.windowsSdkVersion).value = config.windowsSdkVersion ? config.windowsSdkVersion : "";
            document.getElementById(elementId.macFrameworkPath).value = joinEntries(config.macFrameworkPath);
            document.getElementById(elementId.compileCommands).value = config.compileCommands ? config.compileCommands : "";
            document.getElementById(elementId.mergeConfigurations).checked = config.mergeConfigurations;
            document.getElementById(elementId.configurationProvider).value = config.configurationProvider ? config.configurationProvider : "";
            document.getElementById(elementId.forcedInclude).value = joinEntries(config.forcedInclude);
            document.getElementById(elementId.dotConfig).value = config.dotConfig ? config.dotConfig : "";
            if (config.browse) {
                document.getElementById(elementId.browsePath).value = joinEntries(config.browse.path);
                document.getElementById(elementId.limitSymbolsToIncludedHeaders).checked =
                    config.browse.limitSymbolsToIncludedHeaders && config.browse.limitSymbolsToIncludedHeaders;
                document.getElementById(elementId.databaseFilename).value = config.browse.databaseFilename ? config.browse.databaseFilename : "";
            }
            else {
                document.getElementById(elementId.browsePath).value = "";
                document.getElementById(elementId.limitSymbolsToIncludedHeaders).checked = false;
                document.getElementById(elementId.databaseFilename).value = "";
            }
        }
        finally {
            this.updating = false;
        }
    }
    updateErrors(errors) {
        this.updating = true;
        try {
            this.showErrorWithInfo(elementId.configNameInvalid, errors.name);
            this.showErrorWithInfo(elementId.intelliSenseModeInvalid, errors.intelliSenseMode);
            this.showErrorWithInfo(elementId.compilerPathInvalid, errors.compilerPath);
            this.showErrorWithInfo(elementId.includePathInvalid, errors.includePath);
            this.showErrorWithInfo(elementId.macFrameworkPathInvalid, errors.macFrameworkPath);
            this.showErrorWithInfo(elementId.forcedIncludeInvalid, errors.forcedInclude);
            this.showErrorWithInfo(elementId.compileCommandsInvalid, errors.compileCommands);
            this.showErrorWithInfo(elementId.browsePathInvalid, errors.browsePath);
            this.showErrorWithInfo(elementId.databaseFilenameInvalid, errors.databaseFilename);
            this.showErrorWithInfo(elementId.dotConfigInvalid, errors.dotConfig);
        }
        finally {
            this.updating = false;
        }
    }
    showErrorWithInfo(elementID, errorInfo) {
        this.showElement(elementID, errorInfo ? true : false);
        document.getElementById(elementID).textContent = errorInfo ? errorInfo : "";
    }
    updateConfigSelection(message) {
        this.updating = true;
        try {
            const list = document.getElementById(elementId.configSelection);
            list.options.length = 0;
            for (const name of message.selections) {
                const option = document.createElement("option");
                option.text = name;
                option.value = name;
                list.append(option);
            }
            list.selectedIndex = message.selectedIndex;
        }
        finally {
            this.updating = false;
        }
    }
    setKnownCompilers(compilers) {
        this.updating = true;
        try {
            const list = document.getElementById(elementId.knownCompilers);
            if (list.firstChild) {
                return;
            }
            if (compilers.length === 0) {
                const noCompilerSpan = document.getElementById(elementId.noCompilerPathsDetected);
                const option = document.createElement("option");
                option.text = noCompilerSpan.textContent ?? "";
                option.disabled = true;
                list.append(option);
            }
            else {
                for (const path of compilers) {
                    const option = document.createElement("option");
                    option.text = path;
                    option.value = path;
                    list.append(option);
                }
            }
            this.showElement(elementId.compilerPath, true);
            this.showElement(elementId.knownCompilers, true);
            list.value = "";
        }
        finally {
            this.updating = false;
        }
    }
    showElement(elementID, show) {
        document.getElementById(elementID).style.display = show ? "block" : "none";
    }
}
const app = new SettingsApp();
//# sourceMappingURL=settings.js.map
// SIG // Begin signature block
// SIG // MIIoNwYJKoZIhvcNAQcCoIIoKDCCKCQCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // JwpnBFYx59Flx9IwGbXp3xl1wvr8D4f2zzHejzmGvpig
// SIG // gg2FMIIGAzCCA+ugAwIBAgITMwAABAO91ZVdDzsYrQAA
// SIG // AAAEAzANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTI0MDkxMjIwMTExM1oX
// SIG // DTI1MDkxMTIwMTExM1owdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // n3RnXcCDp20WFMoNNzt4s9fV12T5roRJlv+bshDfvJoM
// SIG // ZfhyRnixgUfGAbrRlS1St/EcXFXD2MhRkF3CnMYIoeMO
// SIG // MuMyYtxr2sC2B5bDRMUMM/r9I4GP2nowUthCWKFIS1RP
// SIG // lM0YoVfKKMaH7bJii29sW+waBUulAKN2c+Gn5znaiOxR
// SIG // qIu4OL8f9DCHYpME5+Teek3SL95sH5GQhZq7CqTdM0fB
// SIG // w/FmLLx98SpBu7v8XapoTz6jJpyNozhcP/59mi/Fu4tT
// SIG // 2rI2vD50Vx/0GlR9DNZ2py/iyPU7DG/3p1n1zluuRp3u
// SIG // XKjDfVKH7xDbXcMBJid22a3CPbuC2QJLowIDAQABo4IB
// SIG // gjCCAX4wHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFOpuKgJKc+OuNYitoqxfHlrE
// SIG // gXAZMFQGA1UdEQRNMEukSTBHMS0wKwYDVQQLEyRNaWNy
// SIG // b3NvZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQx
// SIG // FjAUBgNVBAUTDTIzMDAxMis1MDI5MjYwHwYDVR0jBBgw
// SIG // FoAUSG5k5VAF04KqFzc3IrVtqMp1ApUwVAYDVR0fBE0w
// SIG // SzBJoEegRYZDaHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraW9wcy9jcmwvTWljQ29kU2lnUENBMjAxMV8yMDEx
// SIG // LTA3LTA4LmNybDBhBggrBgEFBQcBAQRVMFMwUQYIKwYB
// SIG // BQUHMAKGRWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvY2VydHMvTWljQ29kU2lnUENBMjAxMV8yMDEx
// SIG // LTA3LTA4LmNydDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBRaP+hOC1+dSKhbqCr1LIvNEMrRiOQ
// SIG // EkPc7D6QWtM+/IbrYiXesNeeCZHCMf3+6xASuDYQ+AyB
// SIG // TX0YlXSOxGnBLOzgEukBxezbfnhUTTk7YB2/TxMUcuBC
// SIG // P45zMM0CVTaJE8btloB6/3wbFrOhvQHCILx41jTd6kUq
// SIG // 4bIBHah3NG0Q1H/FCCwHRGTjAbyiwq5n/pCTxLz5XYCu
// SIG // 4RTvy/ZJnFXuuwZynowyju90muegCToTOwpHgE6yRcTv
// SIG // Ri16LKCr68Ab8p8QINfFvqWoEwJCXn853rlkpp4k7qzw
// SIG // lBNiZ71uw2pbzjQzrRtNbCFQAfmoTtsHFD2tmZvQIg1Q
// SIG // VkzM/V1KCjHL54ItqKm7Ay4WyvqWK0VIEaTbdMtbMWbF
// SIG // zq2hkRfJTNnFr7RJFeVC/k0DNaab+bpwx5FvCUvkJ3z2
// SIG // wfHWVUckZjEOGmP7cecefrF+rHpif/xW4nJUjMUiPsyD
// SIG // btY2Hq3VMLgovj+qe0pkJgpYQzPukPm7RNhbabFNFvq+
// SIG // kXWBX/z/pyuo9qLZfTb697Vi7vll5s/DBjPtfMpyfpWG
// SIG // 0phVnAI+0mM4gH09LCMJUERZMgu9bbCGVIQR7cT5YhlL
// SIG // t+tpSDtC6XtAzq4PJbKZxFjpB5wk+SRJ1gm87olbfEV9
// SIG // SFdO7iL3jWbjgVi1Qs1iYxBmvh4WhLWr48uouzCCB3ow
// SIG // ggVioAMCAQICCmEOkNIAAAAAAAMwDQYJKoZIhvcNAQEL
// SIG // BQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMT
// SIG // KU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhv
// SIG // cml0eSAyMDExMB4XDTExMDcwODIwNTkwOVoXDTI2MDcw
// SIG // ODIxMDkwOVowfjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEoMCYG
// SIG // A1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmluZyBQQ0Eg
// SIG // MjAxMTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoC
// SIG // ggIBAKvw+nIQHC6t2G6qghBNNLrytlghn0IbKmvpWlCq
// SIG // uAY4GgRJun/DDB7dN2vGEtgL8DjCmQawyDnVARQxQtOJ
// SIG // DXlkh36UYCRsr55JnOloXtLfm1OyCizDr9mpK656Ca/X
// SIG // llnKYBoF6WZ26DJSJhIv56sIUM+zRLdd2MQuA3WraPPL
// SIG // bfM6XKEW9Ea64DhkrG5kNXimoGMPLdNAk/jj3gcN1Vx5
// SIG // pUkp5w2+oBN3vpQ97/vjK1oQH01WKKJ6cuASOrdJXtjt
// SIG // 7UORg9l7snuGG9k+sYxd6IlPhBryoS9Z5JA7La4zWMW3
// SIG // Pv4y07MDPbGyr5I4ftKdgCz1TlaRITUlwzluZH9TupwP
// SIG // rRkjhMv0ugOGjfdf8NBSv4yUh7zAIXQlXxgotswnKDgl
// SIG // mDlKNs98sZKuHCOnqWbsYR9q4ShJnV+I4iVd0yFLPlLE
// SIG // tVc/JAPw0XpbL9Uj43BdD1FGd7P4AOG8rAKCX9vAFbO9
// SIG // G9RVS+c5oQ/pI0m8GLhEfEXkwcNyeuBy5yTfv0aZxe/C
// SIG // HFfbg43sTUkwp6uO3+xbn6/83bBm4sGXgXvt1u1L50kp
// SIG // pxMopqd9Z4DmimJ4X7IvhNdXnFy/dygo8e1twyiPLI9A
// SIG // N0/B4YVEicQJTMXUpUMvdJX3bvh4IFgsE11glZo+TzOE
// SIG // 2rCIF96eTvSWsLxGoGyY0uDWiIwLAgMBAAGjggHtMIIB
// SIG // 6TAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4EFgQUSG5k
// SIG // 5VAF04KqFzc3IrVtqMp1ApUwGQYJKwYBBAGCNxQCBAwe
// SIG // CgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB
// SIG // /wQFMAMBAf8wHwYDVR0jBBgwFoAUci06AjGQQ7kUBU7h
// SIG // 6qfHMdEjiTQwWgYDVR0fBFMwUTBPoE2gS4ZJaHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvTWljUm9vQ2VyQXV0MjAxMV8yMDExXzAzXzIyLmNy
// SIG // bDBeBggrBgEFBQcBAQRSMFAwTgYIKwYBBQUHMAKGQmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMv
// SIG // TWljUm9vQ2VyQXV0MjAxMV8yMDExXzAzXzIyLmNydDCB
// SIG // nwYDVR0gBIGXMIGUMIGRBgkrBgEEAYI3LgMwgYMwPwYI
// SIG // KwYBBQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9wa2lvcHMvZG9jcy9wcmltYXJ5Y3BzLmh0bTBABggr
// SIG // BgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBwAG8AbABp
// SIG // AGMAeQBfAHMAdABhAHQAZQBtAGUAbgB0AC4gHTANBgkq
// SIG // hkiG9w0BAQsFAAOCAgEAZ/KGpZjgVHkaLtPYdGcimwuW
// SIG // EeFjkplCln3SeQyQwWVfLiw++MNy0W2D/r4/6ArKO79H
// SIG // qaPzadtjvyI1pZddZYSQfYtGUFXYDJJ80hpLHPM8QotS
// SIG // 0LD9a+M+By4pm+Y9G6XUtR13lDni6WTJRD14eiPzE32m
// SIG // kHSDjfTLJgJGKsKKELukqQUMm+1o+mgulaAqPyprWElj
// SIG // HwlpblqYluSD9MCP80Yr3vw70L01724lruWvJ+3Q3fMO
// SIG // r5kol5hNDj0L8giJ1h/DMhji8MUtzluetEk5CsYKwsat
// SIG // ruWy2dsViFFFWDgycScaf7H0J/jeLDogaZiyWYlobm+n
// SIG // t3TDQAUGpgEqKD6CPxNNZgvAs0314Y9/HG8VfUWnduVA
// SIG // KmWjw11SYobDHWM2l4bf2vP48hahmifhzaWX0O5dY0Hj
// SIG // Wwechz4GdwbRBrF1HxS+YWG18NzGGwS+30HHDiju3mUv
// SIG // 7Jf2oVyW2ADWoUa9WfOXpQlLSBCZgB/QACnFsZulP0V3
// SIG // HjXG0qKin3p6IvpIlR+r+0cjgPWe+L9rt0uX4ut1eBrs
// SIG // 6jeZeRhL/9azI2h15q/6/IvrC4DqaTuv/DDtBEyO3991
// SIG // bWORPdGdVk5Pv4BXIqF4ETIheu9BCrE/+6jMpF3BoYib
// SIG // V3FWTkhFwELJm3ZbCoBIa/15n8G9bW1qyVJzEw16UM0x
// SIG // ghoKMIIaBgIBATCBlTB+MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBTaWduaW5n
// SIG // IFBDQSAyMDExAhMzAAAEA73VlV0POxitAAAAAAQDMA0G
// SIG // CWCGSAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgor
// SIG // BgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEE
// SIG // AYI3AgEVMC8GCSqGSIb3DQEJBDEiBCDva2HjRotrILZp
// SIG // SByJ+pE3PW6H/3hRHfOv6sFWr5GzcDBCBgorBgEEAYI3
// SIG // AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAY
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3
// SIG // DQEBAQUABIIBAG+hq3ODzKya+fEz7knfxu8bxWfRiScI
// SIG // msCxhiN3ulZdyix7nUhvAyyFSX3Tk6RbZjR9NatkUF3e
// SIG // al9xBDb5YmLWhZBvYI1o9km4oUw3Q/WdJB9YbSIONUS2
// SIG // ntf54oEfdKvi3f4PBr1MsJoSXGE8ORym0cAE8Ou0FJtA
// SIG // 4PZTlS/j8Q5HWcWYA/khIBST5RJoGGq6/ykcsuq6oY6p
// SIG // xcy0jide1MpIv8i68mZio20XBShumTBXuqTvNUktnTYJ
// SIG // 9sxjUZqYEy0Trm0Y8BB2kde7z1/RGEldRD+JRpn4nZvV
// SIG // +woSmreyV6nQm7DmK+Pq/lltuD6MIpo5ES0ISd5cxd0/
// SIG // 8gqhgheUMIIXkAYKKwYBBAGCNwMDATGCF4Awghd8Bgkq
// SIG // hkiG9w0BBwKgghdtMIIXaQIBAzEPMA0GCWCGSAFlAwQC
// SIG // AQUAMIIBUgYLKoZIhvcNAQkQAQSgggFBBIIBPTCCATkC
// SIG // AQEGCisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQg
// SIG // NlZcVpZsVEwdD0jXrStxSOktG2XZKWsUFdaUECRx2OAC
// SIG // BmcH5FgJshgTMjAyNDEwMjEyMTExMzMuOTgyWjAEgAIB
// SIG // 9KCB0aSBzjCByzELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjElMCMG
// SIG // A1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0aW9u
// SIG // czEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkRDMDAt
// SIG // MDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBTZXJ2aWNloIIR6jCCByAwggUIoAMCAQIC
// SIG // EzMAAAHoULCAzytymU0AAQAAAegwDQYJKoZIhvcNAQEL
// SIG // BQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcN
// SIG // MjMxMjA2MTg0NTIyWhcNMjUwMzA1MTg0NTIyWjCByzEL
// SIG // MAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9z
// SIG // b2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMe
// SIG // blNoaWVsZCBUU1MgRVNOOkRDMDAtMDVFMC1EOTQ3MSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKC
// SIG // AgEA4UF3RNFs1xu8M3gvUhnR+nlcHRpRemIKVO8HjhQZ
// SIG // KVvcrhJiUgxNQAwcf9A07kQWqZUg/AkdUKskJsUQw/wn
// SIG // bw8nmRQHGepdvp5TLLJmcgvEz7dRk1gFLdxl1FOoNBdL
// SIG // SKxTS4KHwozr5txtI+PNlbrSkuMGU+mzVZwVbAoa9gI5
// SIG // lWxgzf+kLPxKmpC+XMKRnpdbXu1Dtd3VMGj4zstFotam
// SIG // DZkfIu09Zbo9iXRXX2YTD8qsqvzQ52bjjUm4/BTOcSga
// SIG // Gq9dq2oAvP9Ql2i9TjFwcBmkaCU2LZLIvZ47quMA5HAM
// SIG // IrQmeQbUNjaj2dJS4kAeztdAZvc6R1p/cdfx5nQJ+JKD
// SIG // FilA8B+bHf8w7uL4vPOxVsZueJJFjb5PBXkO2WdEOYKh
// SIG // iluIOq3r1diHQMQaG1naK6sL86i+9FnbIA1Pz+XNC/L2
// SIG // CLJFCWXnQhhzNoRyLDUcsPRBaEqJQzPsgnnZM+ve/O7P
// SIG // JyKeeYnC3w6CsOYWpORujFhene9bXDc1ffr/UUCjGulM
// SIG // H8qrq3nXebKl1gl7/voXpOANeVsmyHOrn09IpWsymGbw
// SIG // 76GrMIIz9Eni1u5r5nMNBRC8xdf7lmlxJSxzlyJYnihd
// SIG // ov2M0OlOdCvXW4ZzGg3CUrBtIVy0U8vy0G7Dg9IcOxbi
// SIG // tJ5s6LUsf+X6PYO3ws6BY5N7QxMCAwEAAaOCAUkwggFF
// SIG // MB0GA1UdDgQWBBT6OVvKPfNJDH0VUG2uk9+B8HpS2jAf
// SIG // BgNVHSMEGDAWgBSfpxVdAF5iXYP05dJlpxtTNRnpcjBf
// SIG // BgNVHR8EWDBWMFSgUqBQhk5odHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3NvZnQlMjBU
// SIG // aW1lLVN0YW1wJTIwUENBJTIwMjAxMCgxKS5jcmwwbAYI
// SIG // KwYBBQUHAQEEYDBeMFwGCCsGAQUFBzAChlBodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NlcnRzL01p
// SIG // Y3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEw
// SIG // KDEpLmNydDAMBgNVHRMBAf8EAjAAMBYGA1UdJQEB/wQM
// SIG // MAoGCCsGAQUFBwMIMA4GA1UdDwEB/wQEAwIHgDANBgkq
// SIG // hkiG9w0BAQsFAAOCAgEAln3CZtq8F7T4u+JJujygJJ4v
// SIG // fgVqLavkLQxoHk+Rd66Oz7CFDSkZFMrbhqiPLYS9yXK2
// SIG // 9N8egzqaWCRAPqW+qNqj4xXXTtUy6r0l62JvjoAiy/u/
// SIG // txZkZn5EbvKx76a2m9DtfcA27pIDvCOTotUXoDCZfLeZ
// SIG // P1LRNFm98wJTh5woyxksz/w6N6bcIV6JJNNiLw+0mRAW
// SIG // z26Bm7cOCwh7E9qRWpKRjgYfiElDFwX/N+QrlTX3XcMZ
// SIG // shrzUs8hMhJOYdVYe7acD+8+6yfh7Ij+LHagY4+gL6Kb
// SIG // n+K8VAH6xG1emo/LcBbO1lRzYiIKxzZ2v+eZMqwBvWLd
// SIG // fQj75FMMWCtLmbz5dlgt/Z33NIzk44rwu7PyFKMxOLX8
// SIG // tyTZMkNXDbb2X7Yl94+Q7fniznrhg474Sb2DCBJKZFev
// SIG // FyzR+/mQX2Gvj5n0WGqBRRwiShKEUmdz2wyTwYhIWfcr
// SIG // sTHXaDDENfU5Mn7aLehM9F4UpsI2Aat/Q7wRVoZcgxgY
// SIG // a1NxrXg1olXfWBkgdlp8bhTMuX2wCuqPD1s/EETIqbVx
// SIG // ytxwwa9sFlhHK64HE7h2SCU6nqTaGJcfVURb4/7wl2gB
// SIG // XJpFtZ5O1RPqMGl6+USY68g6vbm5Mg6tZnaxf4HmkQC1
// SIG // 3DWW3zVyJIV81wOmvAompnEFvw4JiyaYlUDa4mWAhyAw
// SIG // ggdxMIIFWaADAgECAhMzAAAAFcXna54Cm0mZAAAAAAAV
// SIG // MA0GCSqGSIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMTIwMAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0
// SIG // aWZpY2F0ZSBBdXRob3JpdHkgMjAxMDAeFw0yMTA5MzAx
// SIG // ODIyMjVaFw0zMDA5MzAxODMyMjVaMHwxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFBDQSAyMDEwMIICIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAg8AMIICCgKCAgEA5OGmTOe0ciELeaLL1yR5vQ7V
// SIG // gtP97pwHB9KpbE51yMo1V/YBf2xK4OK9uT4XYDP/XE/H
// SIG // ZveVU3Fa4n5KWv64NmeFRiMMtY0Tz3cywBAY6GB9alKD
// SIG // RLemjkZrBxTzxXb1hlDcwUTIcVxRMTegCjhuje3XD9gm
// SIG // U3w5YQJ6xKr9cmmvHaus9ja+NSZk2pg7uhp7M62AW36M
// SIG // EBydUv626GIl3GoPz130/o5Tz9bshVZN7928jaTjkY+y
// SIG // OSxRnOlwaQ3KNi1wjjHINSi947SHJMPgyY9+tVSP3PoF
// SIG // VZhtaDuaRr3tpK56KTesy+uDRedGbsoy1cCGMFxPLOJi
// SIG // ss254o2I5JasAUq7vnGpF1tnYN74kpEeHT39IM9zfUGa
// SIG // RnXNxF803RKJ1v2lIH1+/NmeRd+2ci/bfV+Autuqfjbs
// SIG // Nkz2K26oElHovwUDo9Fzpk03dJQcNIIP8BDyt0cY7afo
// SIG // mXw/TNuvXsLz1dhzPUNOwTM5TI4CvEJoLhDqhFFG4tG9
// SIG // ahhaYQFzymeiXtcodgLiMxhy16cg8ML6EgrXY28MyTZk
// SIG // i1ugpoMhXV8wdJGUlNi5UPkLiWHzNgY1GIRH29wb0f2y
// SIG // 1BzFa/ZcUlFdEtsluq9QBXpsxREdcu+N+VLEhReTwDwV
// SIG // 2xo3xwgVGD94q0W29R6HXtqPnhZyacaue7e3PmriLq0C
// SIG // AwEAAaOCAd0wggHZMBIGCSsGAQQBgjcVAQQFAgMBAAEw
// SIG // IwYJKwYBBAGCNxUCBBYEFCqnUv5kxJq+gpE8RjUpzxD/
// SIG // LwTuMB0GA1UdDgQWBBSfpxVdAF5iXYP05dJlpxtTNRnp
// SIG // cjBcBgNVHSAEVTBTMFEGDCsGAQQBgjdMg30BATBBMD8G
// SIG // CCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpb3BzL0RvY3MvUmVwb3NpdG9yeS5odG0wEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwgwGQYJKwYBBAGCNxQCBAwe
// SIG // CgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB
// SIG // /wQFMAMBAf8wHwYDVR0jBBgwFoAU1fZWy4/oolxiaNE9
// SIG // lJBb186aGMQwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3JsMFoG
// SIG // CCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNS
// SIG // b29DZXJBdXRfMjAxMC0wNi0yMy5jcnQwDQYJKoZIhvcN
// SIG // AQELBQADggIBAJ1VffwqreEsH2cBMSRb4Z5yS/ypb+pc
// SIG // FLY+TkdkeLEGk5c9MTO1OdfCcTY/2mRsfNB1OW27DzHk
// SIG // wo/7bNGhlBgi7ulmZzpTTd2YurYeeNg2LpypglYAA7AF
// SIG // vonoaeC6Ce5732pvvinLbtg/SHUB2RjebYIM9W0jVOR4
// SIG // U3UkV7ndn/OOPcbzaN9l9qRWqveVtihVJ9AkvUCgvxm2
// SIG // EhIRXT0n4ECWOKz3+SmJw7wXsFSFQrP8DJ6LGYnn8Atq
// SIG // gcKBGUIZUnWKNsIdw2FzLixre24/LAl4FOmRsqlb30mj
// SIG // dAy87JGA0j3mSj5mO0+7hvoyGtmW9I/2kQH2zsZ0/fZM
// SIG // cm8Qq3UwxTSwethQ/gpY3UA8x1RtnWN0SCyxTkctwRQE
// SIG // cb9k+SS+c23Kjgm9swFXSVRk2XPXfx5bRAGOWhmRaw2f
// SIG // pCjcZxkoJLo4S5pu+yFUa2pFEUep8beuyOiJXk+d0tBM
// SIG // drVXVAmxaQFEfnyhYWxz/gq77EFmPWn9y8FBSX5+k77L
// SIG // +DvktxW/tM4+pTFRhLy/AsGConsXHRWJjXD+57XQKBqJ
// SIG // C4822rpM+Zv/Cuk0+CQ1ZyvgDbjmjJnW4SLq8CdCPSWU
// SIG // 5nR0W2rRnj7tfqAxM328y+l7vzhwRNGQ8cirOoo6CGJ/
// SIG // 2XBjU02N7oJtpQUQwXEGahC0HVUzWLOhcGbyoYIDTTCC
// SIG // AjUCAQEwgfmhgdGkgc4wgcsxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJTAjBgNVBAsTHE1pY3Jvc29mdCBBbWVyaWNhIE9w
// SIG // ZXJhdGlvbnMxJzAlBgNVBAsTHm5TaGllbGQgVFNTIEVT
// SIG // TjpEQzAwLTA1RTAtRDk0NzElMCMGA1UEAxMcTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgU2VydmljZaIjCgEBMAcGBSsO
// SIG // AwIaAxUAjCRuL4NI7jDlZ9gbigAlLz/NBbqggYMwgYCk
// SIG // fjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDANBgkq
// SIG // hkiG9w0BAQsFAAIFAOrA4mEwIhgPMjAyNDEwMjExNDIz
// SIG // MjlaGA8yMDI0MTAyMjE0MjMyOVowdDA6BgorBgEEAYRZ
// SIG // CgQBMSwwKjAKAgUA6sDiYQIBADAHAgEAAgITiDAHAgEA
// SIG // AgITETAKAgUA6sIz4QIBADA2BgorBgEEAYRZCgQCMSgw
// SIG // JjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6EgoQowCAIB
// SIG // AAIDAYagMA0GCSqGSIb3DQEBCwUAA4IBAQAjqTzONymt
// SIG // cbnpRBRJ8jGSzLbnQt0sbO9zSPSstAajqCoI8mdrH2pY
// SIG // pzQomPKkRy1e3hTFqg6LjTbp0O5RGKQ9HpUeC1SeqY9Y
// SIG // ceyWk76Nfx42hMLqdgWy66a9tUuhm3yGn60PLyFCSlRC
// SIG // k4B8cQjGhXZSz2XAiU0QyQ51X9BgZSlermvF63uxtXeN
// SIG // EeZdN+pDiBL8bTKJ35q4ll7ATDUUKrKhLpjGMiIG9aaX
// SIG // CafRapV/hx3IJsBICn1O3ZlqfhXhyX0PW6v4EVXR9J2k
// SIG // dxJEqcqanUYgItY6Qa7KP+q1iOaVtuP3vt1d7BgKlOyC
// SIG // Wjq8zakJ2d3Nnw8Fk/mtr/KkMYIEDTCCBAkCAQEwgZMw
// SIG // fDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMAAAHo
// SIG // ULCAzytymU0AAQAAAegwDQYJYIZIAWUDBAIBBQCgggFK
// SIG // MBoGCSqGSIb3DQEJAzENBgsqhkiG9w0BCRABBDAvBgkq
// SIG // hkiG9w0BCQQxIgQgnBAsAUbYbTtPD+SkuZhGzGSyi+kh
// SIG // zoYdKDBXMNZOfeswgfoGCyqGSIb3DQEJEAIvMYHqMIHn
// SIG // MIHkMIG9BCAq0trE1QKEIIJB0efaTaooHtMXyU9id1PF
// SIG // tUnPB/jrHTCBmDCBgKR+MHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwAhMzAAAB6FCwgM8rcplNAAEAAAHoMCIE
// SIG // ICOsr8s578Rk4UDZL5xX0V5e5Um21uOoeO85AiSDXlfG
// SIG // MA0GCSqGSIb3DQEBCwUABIICAJrZPjPqXf+0cGTF1DZn
// SIG // 0xW/J9qtKJLVPFLMnyPjp6oTkcn8AZiQSZ26JU4vfYLJ
// SIG // 3OpeU54pSRV/KmstG7TuqDbhXpPlSY1iBuq/gDAtZO3y
// SIG // opHebK8YO+5k1+ogzypFtdThhZO3N8UKVx57+JPVY6VI
// SIG // 0ldxBpjb6k20ehuJAt1DqShUO6rvJTgtEtUItSEkSlxy
// SIG // c0sSspc6MIMbD8cjLt3DPbz1rA/6H+ZkVxHIjUbaNa/W
// SIG // K+VnK9Og8YFihENKvmNLDv0wkEnJmSE3EmbJrPKALAaG
// SIG // RXZC902gad4QwZa3y6y6mk57jKO/YwX2uPOKypEEfrHl
// SIG // Nwi7RgT/6DeBo4hHP72qhF+43euDWSTUwsLNaLrsYtEB
// SIG // P+tUcIlJDXGXsK5Fl+ufMeaynK1YBGTXAmaSKx/vt+wW
// SIG // FImRd7bEjrz/2lkwkYy8xbuJp7LLVna6IeEqEoa8mo1M
// SIG // 8rXX3ygi+gZgJjzC1mFS/ZWXDcCaTRkekzzqwHMTnIrS
// SIG // Cd+7FYN0j05LOV7dbseeBhwZRyKtT5vfOT+HvQGQ6K4B
// SIG // QYmUU2h56SFQea79RwzT5cfHZddpo3c0h1AGtFIRumaD
// SIG // iMFCGNjmTmVduHV6QS4lmYB/OpKb0D3Y9nt9Qzzpmd0q
// SIG // FwnTSAM5IMNf4y+TW5cXqmAd3b9YS7mMJM/O53QpTU1u
// SIG // 1Pbd
// SIG // End signature block
