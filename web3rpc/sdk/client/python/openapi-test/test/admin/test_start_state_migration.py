from base.testing import KlaytnBaseTesting


class TestAdminStartStateMigration(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.start_state_migration()
        self.assertResponseSuccess()
