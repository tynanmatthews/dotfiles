return {
	{
    'AlexvZyl/nordic.nvim',
    lazy = false,
    priority = 1000,
    config = function()
        require 'nordic' .load()
    end
},
{
    'nvim-telescope/telescope.nvim', tag = '0.1.8',
-- or                              , branch = '0.1.x',
      dependencies = { 'nvim-lua/plenary.nvim' }
    },
    {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function () 
      local configs = require("nvim-treesitter.configs")

      configs.setup({
          ensure_installed = { "c", "lua", "cpp", "vimdoc", "vim", "rust", "css", "javascript", "html", "typescript", "kotlin", "swift", "java", "json", "toml" },
          sync_install = false,
          highlight = { enable = true },
          indent = { enable = true },  
	rainbow = {
		enable = true,
		extended_mode = true,
		max_file_lines = false
		}
        })
    end
 },
{
    "williamboman/mason.nvim",
    "williamboman/mason-lspconfig.nvim",
},
	{
  'mrcjkb/rustaceanvim',
  version = '^4', -- Recommended
  lazy = false, -- This plugin is already lazy
},
{
	'mfussenegger/nvim-dap'
},
{'VonHeikemen/lsp-zero.nvim', branch = 'v3.x'},
{'neovim/nvim-lspconfig'},
{'hrsh7th/cmp-nvim-lsp'},
{'hrsh7th/nvim-cmp'},
{'L3MON4D3/LuaSnip'},
}
