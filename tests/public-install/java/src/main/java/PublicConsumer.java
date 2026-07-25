import com.chaosguide.iam.vertex.EnableIamSecurity;
import com.chaosguide.iam.vertex.authz.PermissionKey;

@EnableIamSecurity
final class PublicConsumer {
  static final PermissionKey ORDERS_READ = new PermissionKey("orders", "read");

  private PublicConsumer() {}
}
