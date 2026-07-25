import com.chaosguide.iam.vertex.EnableIamSecurity;
import com.chaosguide.iam.vertex.authz.PermissionKey;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableIamSecurity
class VertexSecurityConfiguration {
  static final PermissionKey ORDERS_READ = new PermissionKey("orders", "read");
}
