require("mason").setup()
require("mason-lspconfig").setup({
	ensure_installed = {'rust_analyzer', 'clangd', 'tsserver', 'lua_ls'},
	handlers = {
		function(server_name)
			require('lspconfig')[server_name].setup({})
		end
	}
})
