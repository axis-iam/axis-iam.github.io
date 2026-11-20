import java.net.URI;
import java.util.Set;
import com.chaosguide.iam.vertex.web.CookieWebSessionCarrier;
import com.chaosguide.iam.vertex.web.EnableWebBff;
import com.chaosguide.iam.vertex.web.MemoryWebSessionStore;
import com.chaosguide.iam.vertex.web.WebBff;
import com.chaosguide.iam.vertex.web.WebBffConfig;
import com.chaosguide.iam.vertex.web.WebSessionCarrier;
import com.chaosguide.iam.vertex.web.WebSessionStore;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebBff
public class VertexBffConfiguration {
  @Bean
  WebBffConfig bffConfig(Environment env) {
    URI origin = URI.create("https://app.example.com");
    return new WebBffConfig(
        URI.create(env.getRequiredProperty("IAM_ENDPOINT")),
        env.getRequiredProperty("IAM_RESOURCE_AUDIENCE"),
        env.getRequiredProperty("IAM_WEB_CLIENT_ID"),
        env.getRequiredProperty("IAM_WEB_CLIENT_SECRET"),
        origin.resolve("/auth/callback"), origin, "/auth",
        Set.of("/signed-in", "/signed-out"), "/signed-in",
        Set.of("openid", "profile"), false, 1);
  }

  @Bean(destroyMethod = "close")
  WebSessionStore bffStore() { return new MemoryWebSessionStore(); }

  @Bean
  WebSessionCarrier bffCarrier(WebBffConfig config) {
    return new CookieWebSessionCarrier(config);
  }

  @Bean
  SecurityFilterChain security(HttpSecurity http, WebBff bff) throws Exception {
    bff.configure(http, request -> request.getRequestURI().startsWith("/api/"));
    http.authorizeHttpRequests(rules -> rules
        .requestMatchers("/api/**").authenticated().anyRequest().permitAll())
        .requestCache(cache -> cache.disable())
        .formLogin(form -> form.disable()).httpBasic(basic -> basic.disable())
        .logout(logout -> logout.disable());
    return http.build();
  }
}
