export type GetTodoProps = {
    auth_id?: string;
    id?: string;
}

export type CreateTodoType = {
    auth_id: string;
    title: string;
    description?: string;
}