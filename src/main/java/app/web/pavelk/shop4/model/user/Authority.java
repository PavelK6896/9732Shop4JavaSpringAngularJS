package app.web.pavelk.shop4.model.user;

public enum Authority {
    READ("read"),
    WRITE("write");

    private final String permission;

    Authority(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
