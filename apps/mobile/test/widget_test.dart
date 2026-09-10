import 'package:flutter_test/flutter_test.dart';
import 'package:mobile_app/main.dart';

void main() {
  testWidgets('App smoke test and title verification', (WidgetTester tester) async {
    await tester.pumpWidget(const MonorepoApp());
    expect(find.text('Monorepo Mobile App'), findsOneWidget);
  });
}
