export const styles = (disabled?: boolean) => {
  const navBarTasksActionsIconsContainer = {
    marginLeft: '8px',
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
