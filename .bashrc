#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

# UWSM
if uwsm check may-start && uwsm select; then
  exec systemd-cat -t uwsm_start uwsm start default

fi

# Start SSH agent
eval "$(ssh-agent -s)"
# custom alias
alias ll='ls -la'
alias levers='cd ~/code/msolutions/c_levers/'
