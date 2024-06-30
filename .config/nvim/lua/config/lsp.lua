local lsp_zero = require('lsp-zero')

lsp_zero.on_attach(function(client, bufnr)
	-- see :help lsp-zero-keybindings
	-- to learn the available actions
	lsp_zero.default_keymaps({ buffer = bufnr })
	-- format
	lsp_zero.format_mapping('<leader>fm', {
		format_opts = {
			async = false,
			timeout_ms = 10000,
		},
		servers = {
			['tsserver'] = {'javascript', 'typescript'},
			['rust_analyzer'] = {'rust'},
			['clangd'] = {'cpp'},
			['lua_ls'] = {'lua'},
		}	
	})
	vim.keymap.set("n", "<leader>fm",
		function() vim.lsp.buf.format({ async = false, timeout_ms = 10000, filter = allow_format({ 'lua_ls',
				'rust_analyzer' }) }) end,
		{ buffer = bufnr })
end)

lsp_zero.set_sign_icons({
  error = '✘',
  warn = '▲',
  hint = '⚑',
  info = '»'
})
-- cmp config for autocomplete
local cmp = require('cmp')

cmp.setup({
	sources = {
		{ name = 'nvim_lsp' },
		{ name = "buffer" },
	},
	mapping = {
		['<C-y>'] = cmp.mapping.confirm({ select = false }),
		['<C-e>'] = cmp.mapping.abort(),
		['<Up>'] = cmp.mapping.select_prev_item({ behavior = 'select' }),
		['<Down>'] = cmp.mapping.select_next_item({ behavior = 'select' }),
		['<C-p>'] = cmp.mapping(function()
			if cmp.visible() then
				cmp.select_prev_item({ behavior = 'insert' })
			else
				cmp.complete()
			end
		end),
		['<C-n>'] = cmp.mapping(function()
			if cmp.visible() then
				cmp.select_next_item({ behavior = 'insert' })
			else
				cmp.complete()
			end
		end),
	},
	snippet = {
		expand = function(args)
			require('luasnip').lsp_expand(args.body)
		end,
	},
})
