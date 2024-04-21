export const styles = (disabled?: boolean) => {
  const navBarTasksActionsIconsContainer = {
    marginTop: '-8px',
    marginLeft: '8px',
    width: '40px',
    display: 'flex',
  }

  const navBarTasksActionsIconButton = {
    padding: 0,
    margin: '0 4px',
    opacity: `${!disabled ? '1' : '0.2'}`,
  }

  const navBarTasksActionsIcon = {
    padding: 0,
  }

  return {
    navBarTasksActionsIconsContainer,
    navBarTasksActionsIcon,
    navBarTasksActionsIconButton,
  }
}
